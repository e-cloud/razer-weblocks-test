/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { LockHolder, ADBObjectStore } from "razer-weblocks";

// packaged module type checking
const lock = new LockHolder();

lock.getLockAndHold(123234, ['test']);
lock.getLockAndHold('123234', ['test']);

const store = new ADBObjectStore();

store.add('test', 123, null);
store.add('test', '123', null);


// usb test code
const usb = navigator.usb;
usb.getTotalDevices()
    .then(res => {
        console.log(res > 0);
    });

usb.getDevices();