import { observable, action } from 'mobx'

import { StoreExt } from '@utils/reactExt'

/**
 * Activity Store
 *
 * @export
 * @class ActivityStore
 * @extends {StoreExt}
 */
export class ActivityStore extends StoreExt {
    /**
     * 列表加载时的loading
     *
     * @type {boolean}
     * @memberof ActivityStore
     */
    @observable
    getUsersloading: boolean = false
    /**
     * 列表
     *
     * @type {IActivityStore.IUser[]}
     * @memberof ActivityStore
     */
    @observable
    users: IActivityStore.IActivity[] = []
    /**
     * table pageIndex
     *
     * @type {number}
     * @memberof ActivityStore
     */
    @observable
    pageIndex: number = 1
    /**
     * table pageSize
     *
     * @type {number}
     * @memberof ActivityStore
     */
    @observable
    pageSize: number = 30
    /**
     * users total
     *
     * @type {number}
     * @memberof ActivityStore
     */
    @observable
    total: number = 0

    /**
     * 编辑步骤索引
     *
     * @type {number}
     * @memberof ActivityStore
     */
    @observable
    setpCurrent: number = 0

    /**
     * 设置编辑步骤索引
     *
     * @memberof ActivityStore
     */
    @action
    setSetpCurrent = (val: number): number => this.setpCurrent = val
}

export default new ActivityStore()
