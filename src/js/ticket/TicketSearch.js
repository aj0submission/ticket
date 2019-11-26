'use strict';
import { TICKET_ARRAY as ticket_appay } from "./test-data";
import ShowData from "./ShowData";

const deleteTrim = Symbol();
const getCsvData = Symbol();
const getCsvDataLocal = Symbol();

export default class TicketSearch {

    constructor(csv_ticket, div_search, div_result, env) {
        this.csv_ticket = csv_ticket;
        this.div_search = div_search;
        this.div_result = div_result;
        this.env = env;
        this.init();
    }

    init() {
        [].forEach.call(this.div_search, (div_search) => {
            const input = div_search.querySelector("#ticket_input");
            const search = div_search.querySelector(".clickSearch");

            // 検索ボタン押下後、結果出力
            search.addEventListener("click", () => {
                this.showTicketData(input, this.csv_ticket, this.div_result, this.env);
            });
        });
    }

    /**
     * チケット情報出力
     * 
     * @param {*} input 
     * @param {*} csv_ticket 
     * @param {*} div_result 
     * @param {*} env 
     */
    showTicketData(input, csv_ticket, div_result, env) {
        // ユーザー入力値取得
        let userdata = input.value;
        userdata = this[deleteTrim](userdata);

        // ファイル検索、出力
        switch (env) {
            case 'PRO':
                this[getCsvData](userdata, csv_ticket, div_result);
                break;
            case 'LOCAL':
                this[getCsvDataLocal](userdata, ticket_appay, div_result);
                break;
        }
    }

    /**
     * 空白削除
     * 
     * @param {*} userdata 
     */
    [ deleteTrim ] (userdata) {
        let data = userdata.trim();
        return data;
    }

    /**
     * csvデータ取得 [PRO]
     * 
     * @param {*} csvpath 
     */
    [ getCsvData ] (userdata, csv_ticket, div_result) {

        let xhr = new XMLHttpRequest();
        let csvdata = '';

        xhr.open("GET", csv_ticket, true);
        xhr.send(null);
        xhr.onload = function() {
            csvdata = xhr.responseText;
            new ShowData(userdata, csvdata, div_result);
        }
    }

    /**
     * csvデータ取得 [LOCAL]
     * @param {*} ticket_appay 
     */
    [ getCsvDataLocal ] (userdata, ticket_appay, div_result) {
        let csvdata = ticket_appay;
        new ShowData(userdata, csvdata, div_result);
    }
}