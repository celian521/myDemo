import { ActivityStore as ActivityModel } from './index'

export as namespace IActivityStore

export interface ActivityStore extends ActivityModel { }

export interface IActivity {
    _id?: string
    account: string
    password?: string
    category?: string
    createdAt?: string
}
