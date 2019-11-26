'use strict';

import { CSV_PATH as csvpath} from "./config";
import { ENV } from "./env";
import TicketSearch from "../js/ticket/TicketSearch";
import TicketModal from "../js/ticket/TicketModal";

class Main {
    static exec() {
        const OBJ = new Main();
        OBJ.ticket();
        OBJ.modal();
    }

    ticket() {
        const CSV_TICKET = csvpath;
        const DIV_SEARCH = document.querySelectorAll(".search");
        const DIV_RESULT = document.querySelector(".ticket-result");
        if (CSV_TICKET && DIV_SEARCH && DIV_RESULT && ENV) {
            const sc = new TicketSearch(CSV_TICKET, DIV_SEARCH, DIV_RESULT, ENV);
        }
    }

    modal() {
        const MAIN_ABOUT = document.querySelectorAll(".about");
        if(MAIN_ABOUT) {
            const md = new TicketModal(MAIN_ABOUT);
        }
    }
}

Main.exec();
