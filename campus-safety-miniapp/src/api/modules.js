import { requestMock } from './request'
import {
  workbench,
  todoTasks,
  objectHome,
  objectLists,
  resources,
  hazard,
  events,
  education,
  evaluation
} from '../mock/index'

export const getWorkbench = () => requestMock(workbench)
export const getTodoTasks = () => requestMock(todoTasks)
export const getObjectHome = () => requestMock(objectHome)
export const getObjectList = (type) => requestMock(objectLists[type] || [])
export const getResourceList = (type) => requestMock(resources[type] || [])
export const getHazardList = (type) => requestMock(hazard[type] || [])
export const getEvents = () => requestMock(events)
export const getEducation = () => requestMock(education)
export const getEvaluation = () => requestMock(evaluation)
