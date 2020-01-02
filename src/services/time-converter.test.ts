import timeConverter from "./time-converter";
import {Time} from "../types/entities/time";
import {BackendTime} from "../types/entities/backend-time";

describe('TimeConverter', () => {
    let backendTime: BackendTime;

    beforeEach(() => {
        backendTime = {
            year: 2020,
            day: 1,
            month: 0
        };
    });

    it('should transform input object to another object', () => {
        const rslt: Time = timeConverter.straight(backendTime);

        expect(rslt).toBeDefined();
        expect(rslt).not.toBeNull();
        expect(typeof rslt).toBe('object');
    });

    it('should fail on negative values', () => {
        const negativeBackendTime: BackendTime = {
            year: -1001,
            day: 1,
            month: 2
        };
        const test = () => {
            timeConverter.straight(negativeBackendTime);
        };

        expect(test).toThrow(Error);
    });

    it('should correct transform values', () => {
        const rslt: Time = timeConverter.straight(backendTime);

        expect(rslt.date.getFullYear()).toBe(backendTime.year);
        expect(rslt.date.getDate()).toBe(backendTime.day);
        expect(rslt.date.getMonth()).toBe(backendTime.month + 1);
    });
});