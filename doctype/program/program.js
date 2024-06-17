// Copyright (c) 2024, naman and contributors
// For license information, please see license.txt

frappe.ui.form.on("Program", {
	refresh(frm) {

	},
    validate:function(frm){
        let total_credit=0;
        arrDatas=frm.doc["courses"];
        for(data of arrDatas){
        total_credit+= parseFloat(data['course_credit']);
        }
        frm.doc.total_credits=total_credit;
        }
});
