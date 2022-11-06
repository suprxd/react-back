export class Exception extends Error {
    appLevelException: boolean;

    constructor(message: string) {
        super(message);
        this.appLevelException = true;
    }
}