/** @odoo-module **/


import config from 'web.config';
import core from 'web.core';
import SystrayMenu from 'web.SystrayMenu';
import Widget from 'web.Widget';
var QWeb = core.qweb;
import session from 'web.session';

//odoo.define('odoo.systray.Calculator', function (require) {
//"use strict";

//var config = require('web.config');
//var core = require('web.core');
//var SystrayMenu = require('web.SystrayMenu');
//var Widget = require('web.Widget');
//var QWeb = core.qweb;
//var session = require('web.session');


require('web._field_registry');

var ProbCalc = Widget.extend({
    name: 'sysprobcalc_menu',
    template:'odoo.systray.Calculator',
    events: {
        'click .o_prob_button_input': '_onClickButtonInput',
        'click .o_prob_button_result': '_onClickButtonResult',
        'click .o_prob_button_reset': '_onClickButtonReset',
        'click .o_prob_button_erase': '_onClickButtonCheck',
        'click .o_prob_button_sqrt': '_onClickButtonSqrt',
        'click .o_prob_button_percent': '_onClickButtonPercent',
        'show.bs.dropdown': '_onShowDropdown',
    },
    /**
     * @override
     */
    start: function () {
        this._$previews = this.$('.o_systray_calc_probc');
        this.$input_val = $(".calc_input_val").val() || ''
        this._do_sqrt = false
        this._do_percent = false
        return this._super.apply(this, arguments);
    },
    _onClickButtonSqrt: function(ev){
        this._do_sqrt = true
        $(".calc_input_val").val($(ev.currentTarget).val())
        this.$input_val = $(".calc_input_val").val()
    },
    _onClickButtonPercent: function(ev){
        this._do_percent = true
        this.$input_val = $(".calc_input_val").val()
        $(".calc_input_val").val(this.$input_val + $(ev.currentTarget).val())
        this.$input_val = $(".calc_input_val").val()
    },
    _onClickButtonInput: function(ev){
        if ($(".calc_input_val").val() == 'Error'){
            $(".calc_input_val").val('')
        }
        this.$input_val = $(".calc_input_val").val()
        $(".calc_input_val").val(this.$input_val + $(ev.currentTarget).val())
        this.$input_val = $(".calc_input_val").val()
    },
    _onClickButtonResult: function(){
        this.$input_val = $(".calc_input_val").val()
        try{
            if (this._do_sqrt){
                this.$input_val = this.$input_val.slice(1);
                $(".calc_input_val").val(Math.sqrt((this.$input_val)))
                this._do_sqrt = false
            }else if (this._do_percent){
                var PercentInputVal = this.$input_val.split('%')
                var first_eval = eval(PercentInputVal[0])
                var last_eval = eval(PercentInputVal[1])
                var PercentResult = (first_eval * last_eval) / 100.00
                $(".calc_input_val").val(PercentResult)
                this.$input_val = $(".calc_input_val").val()
                this._do_percent = false
            }else{
                $(".calc_input_val").val(parseFloat(eval(this.$input_val)))
            }
        }catch{
            $(".calc_input_val").val("Error")
            this.$input_val = $(".calc_input_val").val()
        }
        this.$input_val = $(".calc_input_val").val()
    },
    _onClickButtonReset: function(){
        this.$input_val = ''
        $(".calc_input_val").val('')
    },
    _onClickButtonCheck: function(){
        $(".calc_input_val").val($(".calc_input_val").val().slice(0, -1));
        this.$input_val = $(".calc_input_val").val()
    },
    _updatePreviews: function () {
        this._$previews.html(QWeb.render('odoo.systray.Calculator.Previews', {
                CalcInputVal:this.$input_val
            }));
    },
    _onShowDropdown: function () {
        $(this).toggleClass('open');
        this._updatePreviews();
    },
});

if (session.allow_user_to_view_calc){
    SystrayMenu.Items.push(ProbCalc);
}

return ProbCalc;

//});

