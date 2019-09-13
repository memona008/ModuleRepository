/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}
 * @Return {string}
 */
export default class LoggerHelper {
    private _appConstants;
    static listName: string;
    constructor();
    Log(item: ILogger): void;
    private CreateListColumns;
    private CheckQueue;
    Initalize(listName: any): Promise<void>;
}
export interface ILogger {
    PageURL?: string;
    FileName?: string;
    Method?: string;
    UserId?: any;
    ExType?: any;
    ErrorMessage?: string;
    ErrorDetails?: string;
    JSON?: string;
    ProgrammeID?: number;
    StatusCode?: number;
}
export declare class AppConstants {
    private static _instance;
    private static _listName;
    private static _queue;
    private static _listCreated;
    static Instance(): AppConstants;
    static ListName: string;
    static Queue: ILogger[];
    static ListCreated: boolean;
    constructor();
}
