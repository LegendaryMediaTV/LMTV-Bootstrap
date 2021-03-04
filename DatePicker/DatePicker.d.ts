export default class DatePicker extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    target: React.RefObject<any>;
    /** when date selected */
    onChange: (selected: any) => void;
    /** when popover needs to close */
    onClose: () => void;
    /** when month change button clicked (i.e., prev/next month) */
    onMonthChange(deltaMonths: any): void;
    /** when popover needs to toggle open/closed */
    onToggle: () => void;
    /*******************
     ***** Methods *****
     ******************/
    dayClassName: (week: any, day: any) => string;
    load: () => void;
    startDate: (input: any) => Date;
}
import React from "react";
