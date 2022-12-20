# -*- coding: utf-8 -*-
from odoo import models, api, fields


class Http(models.AbstractModel):
    _inherit = 'ir.http'

    def session_info(self):
        session_info = super(Http, self).session_info()
        allow_to_show_calculator = self.env.user.has_group("odoo_calculator.grp_allow_to_show_calculator")
        session_info.update({
            'allow_user_to_view_calc': True if allow_to_show_calculator else False,
        })
        return session_info

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
