export interface menuNode {
    name: any,
    status: boolean,
    children?: menuNode[]

}
export interface IMenuMastersResponce {

    status: true,
    data: [
        {
            id: number,
            refGroup: number,
            name: string,
            objectName: string,
            refMenuId: number,
            orderNum: number,
            type: string,
            menuPath: string,
            remarks: string,
            isActive: true,
            entDate: Date,
            entUser: null,
            entTerm: null,
            updDate: Date,
            updUser: null,
            updTerm: null,
            menuIcon: string,
            refGroupNavigation: string,
            tblRoleWiseMenu: []
        },

    ],
    error: string,
    additionalData: null
}
