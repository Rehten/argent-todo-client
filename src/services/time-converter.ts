import {Straight} from "../types/services/straight";
import {BackendTime} from "../types/entities/backend-time";
import {Time} from "../types/entities/time";
import {Reverse} from "../types/services/reverse";

class TimeConverter implements Straight<BackendTime, Time> {
    straight(input: BackendTime): Time {
        let isTimeValid = true;

        for (let key in input) {
            if (input[key as keyof BackendTime] < 0) {
                isTimeValid = false;
            }
        }

        if (isTimeValid) {
            const { year, month, day } = input;
            return new Time(new Date(year, month + 1, day));
        } else {
            throw Error("Negative values is not allowed.");
        }
    }
}

const timeConverter = new TimeConverter();

export default timeConverter;