/**
 * Created by STYR-Curt on 5/26/2017.
 */
import {Composite} from 'tabris';

export interface ISearchable {

    getText(): string;
    appendTo(composite: Composite): void;
    detach(): void;
}