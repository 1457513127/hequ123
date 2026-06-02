const FALLBACK_TARGETS = new Set([
  'Noto Sans SC',
  'Inter',
  'Arial',
  'Microsoft YaHei',
  'Source Han Sans SC'
]);

const STYLE_PRIORITY = {
  Thin: ['Thin', 'Ultralight', 'Light', 'Regular'],
  Ultralight: ['Ultralight', 'Thin', 'Light', 'Regular'],
  Light: ['Light', 'Regular'],
  DemiLight: ['Light', 'Regular'],
  Regular: ['Regular', 'Medium'],
  Medium: ['Medium', 'Regular', 'Semibold', 'Bold'],
  Semibold: ['Semibold', 'SemiBold', 'Medium', 'Bold', 'Regular'],
  'Semi Bold': ['Semibold', 'SemiBold', 'Medium', 'Bold', 'Regular'],
  Bold: ['Semibold', 'Bold', 'Medium', 'Regular'],
  Heavy: ['Heavy', 'Bold', 'Semibold', 'Medium'],
  Black: ['Heavy', 'Black', 'Bold', 'Semibold']
};

figma.showUI(__html__, { width: 420, height: 520 });

function post(type, payload) {
  const message = payload || {};
  message.type = type;
  figma.ui.postMessage(message);
}

function normalizeStyle(style) {
  if (!style) return 'Regular';
  if (/semi\s?bold/i.test(style)) return 'Semibold';
  if (/demi/i.test(style)) return 'DemiLight';
  if (/medium/i.test(style)) return 'Medium';
  if (/bold/i.test(style)) return 'Bold';
  if (/heavy/i.test(style)) return 'Heavy';
  if (/black/i.test(style)) return 'Black';
  if (/light/i.test(style)) return 'Light';
  if (/thin/i.test(style)) return 'Thin';
  return 'Regular';
}

function chooseStyle(sourceStyle, availableStyles) {
  const normalized = normalizeStyle(sourceStyle);
  const priority = STYLE_PRIORITY[normalized] || STYLE_PRIORITY.Regular;
  for (const candidate of priority) {
    if (availableStyles.includes(candidate)) return candidate;
  }
  return availableStyles[0] || 'Regular';
}

async function getPingFangFonts() {
  const fonts = await figma.listAvailableFontsAsync();
  return fonts
    .map((entry) => entry.fontName)
    .filter((font) => /PingFang/i.test(font.family));
}

async function getTargetFamily(preferredFamily) {
  const pingFangFonts = await getPingFangFonts();
  if (!pingFangFonts.length) {
    return { ok: false, pingFangFonts, error: 'PingFang was not found in this Figma Desktop plugin environment.' };
  }

  const exact = pingFangFonts.find((font) => font.family === preferredFamily);
  const family = exact ? exact.family : pingFangFonts[0].family;
  const styles = [...new Set(pingFangFonts.filter((font) => font.family === family).map((font) => font.style))];
  return { ok: true, family, styles, pingFangFonts };
}

async function loadAllPagesIfPossible() {
  if (typeof figma.loadAllPagesAsync === 'function') {
    await figma.loadAllPagesAsync();
  }
}

function collectTextNodes(scope) {
  return scope.findAll((node) => node.type === 'TEXT');
}

function shouldReplaceTextNode(node, mode) {
  if (mode === 'all') return true;
  const fontName = node.fontName;
  if (fontName === figma.mixed) return true;
  return FALLBACK_TARGETS.has(fontName.family);
}

async function replaceNodeFont(node, targetFamily, availableStyles) {
  const fontName = node.fontName;

  if (fontName === figma.mixed) {
    const len = node.characters.length;
    for (let i = 0; i < len; i += 1) {
      const rangeFont = node.getRangeFontName(i, i + 1);
      if (rangeFont === figma.mixed) continue;
      const targetStyle = chooseStyle(rangeFont.style, availableStyles);
      await figma.loadFontAsync({ family: targetFamily, style: targetStyle });
      node.setRangeFontName(i, i + 1, { family: targetFamily, style: targetStyle });
    }
    return;
  }

  const targetStyle = chooseStyle(fontName.style, availableStyles);
  await figma.loadFontAsync({ family: targetFamily, style: targetStyle });
  node.fontName = { family: targetFamily, style: targetStyle };
}

async function runReplace(options) {
  const target = await getTargetFamily(options.family || 'PingFang SC');
  if (!target.ok) {
    post('result', { ok: false, message: target.error, pingFangFonts: target.pingFangFonts });
    return;
  }

  if (options.scope === 'file') await loadAllPagesIfPossible();

  const scopes = options.scope === 'file' ? figma.root.children : [figma.currentPage];
  const textNodes = scopes.flatMap((scope) => collectTextNodes(scope));
  const candidates = textNodes.filter((node) => shouldReplaceTextNode(node, options.mode));

  let changed = 0;
  const failed = [];

  for (const node of candidates) {
    try {
      await replaceNodeFont(node, target.family, target.styles);
      changed += 1;
    } catch (error) {
      failed.push({ id: node.id, name: node.name, error: String(error && error.message ? error.message : error) });
    }
  }

  post('result', {
    ok: failed.length === 0,
    message: `完成：已替换 ${changed} 个文本节点；失败 ${failed.length} 个。`,
    changed,
    failed,
    targetFamily: target.family,
    targetStyles: target.styles
  });
  figma.notify(`PingFang Font Tools：已替换 ${changed} 个文本节点`);
}

figma.ui.onmessage = async (message) => {
  if (message.type === 'scan-fonts') {
    const pingFangFonts = await getPingFangFonts();
    post('fonts', { pingFangFonts });
    return;
  }

  if (message.type === 'replace') {
    try {
      await runReplace(message.options);
    } catch (error) {
      post('result', { ok: false, message: String(error && error.message ? error.message : error) });
    }
    return;
  }

  if (message.type === 'close') {
    figma.closePlugin();
  }
};
