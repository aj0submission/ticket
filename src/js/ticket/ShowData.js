'use strict';

import { TH_NUM as th_num, TH_TEXT as th_text, MS_NOT_EXIST as ms_not } from "../config";
import { TABLE_CLASS as table_class } from "../config/tableconf";

export default class ShowData {

    constructor(userdata, csvdata, div_result) {
        this.userdata = userdata;
        this.csvdata = csvdata;
        this.div_result = div_result;
        this.init();
    }

    init() {
        let hitdatas = this.searchName(this.userdata, this.csvdata);
        this.makeElements(this.div_result, hitdatas);
    }

    searchName(userdata, csvdata) {
        // 行ごとに配列化
        let lines = [];
        let line = [];
        lines = csvdata.split("\n");

        for(let i = 0; i < lines.length; i++) {
            line[i] = lines[i].split(",");
        }

        // 歌手名検索
        let csv_name = '';
        let hitdatas = [];
        for(let i = 1; i < line.length; i++) {
            csv_name = line[i][0].trim();

            if(csv_name !=='' && csv_name !== null, csv_name === userdata) {
                hitdatas.push(line[i]);
            }
        }

        return hitdatas;
    }


    // 結果作成
    makeElements(div_result, hitdatas) {

        // 子要素削除
        while(div_result.lastChild){
            div_result.removeChild(div_result.lastChild);
        }

        // 存在しないメッセージ出力
        if(hitdatas.length < 1 || hitdatas[0][0] ==='') {
            let p_tag = document.createElement('p');
            p_tag.innerText = ms_not;
            div_result.appendChild(p_tag);

            return false;
        }
        // <table></table>
        let table_tag = document.createElement('table');
        table_tag.className = table_class;
        div_result.appendChild(table_tag);

        // table配下: <thead></thead>
        let thead_tag = document.createElement('thead');
        table_tag.appendChild(thead_tag);

        // thead配下: <tr></tr>
        let thead_tr_tag = document.createElement('tr');
        thead_tag.appendChild(thead_tr_tag);

        // tr配下: <th></th>
        let th_tag = [];
        for(let i=0; i<th_num; i++) {
            th_tag[i] = document.createElement('th');
            th_tag[i].innerText = th_text[i];
            thead_tr_tag.appendChild(th_tag[i]);
        }

        // table配下: <tbody></tbody>
        let tbody_tag = document.createElement('tbody');
        table_tag.appendChild(tbody_tag);

        // tbody配下: <tr></tr>
        let tbody_tr_tag = [];
        let tbody_td_tag = [];
        for(let i=0; i<hitdatas.length; i++) {
            tbody_tr_tag[i] = document.createElement('tr');
            for(let t=0; t<hitdatas[i].length; t++) {
                tbody_td_tag[t] = document.createElement('td');
                tbody_td_tag[t].innerText = hitdatas[i][t];
                tbody_tr_tag[i].appendChild(tbody_td_tag[t]);

            }
            tbody_tag.appendChild(tbody_tr_tag[i]);
        }
    }

}