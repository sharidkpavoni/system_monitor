// Obtain constant flow of data about CPU, RAM and DISK from System.ts and send it to hub

import { data } from "./main";
import { ISystemDataFields } from "./ISystemData";
import { System } from "./System";

export class SystemData {
    private system: System;

    constructor() {
        this.system = System.getInstance();
        console.log("System class constructor has been called...");
    }

    public static generateObject(): ISystemDataFields {
        const obj = {
            "os": data.os,
            "hostname": data.hostname,
            "cpuInfo": data.cpuData,
            "cpuUsage": data.cpuUsage,
            "ram": data.ramData,
            "partitions": data.partitions
        };
        return obj;
    }
}
