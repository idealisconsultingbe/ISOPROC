# -*- coding: utf-8 -*-

# Part of Probuse Consulting Service Pvt Ltd. See LICENSE file for full copyright and licensing details.

{
    'name': "Calculator in Backend Odoo",
    'summary': """Calculator in Odoo Backend""",
    'description': """
Odoo Calculator
Odoo Calculator on Backend
Calculator

    """,
    'currency': 'EUR',
    'price': 19.0,
    'version': '5.1.3',
    'license': 'Other proprietary',
    'author': "Probuse Consulting Service Pvt. Ltd.",
    'website': "http://www.probuse.com",
    'support': 'contact@probuse.com',
    'images': ['static/description/img1.jpg'],
    'live_test_url': 'https://probuseappdemo.com/probuse_apps/odoo_calculator/136',#'https://youtu.be/Pw_7KP33vyI',
    'category' : 'Website',
    'depends': [
        'web',
    ],
    'data':[
        'security/calc_security_group.xml',
#        'views/odoo_calc_template.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'odoo_calculator/static/src/js/calc.js',
            'odoo_calculator/static/src/xml/calc.xml',
        ],
#        'web.assets_qweb': [
#            'odoo_calculator/static/src/xml/calc.xml',
#        ]
    },
#    'qweb': [
#        'static/src/xml/calc.xml',
#    ],
    'installable' : True,
    'application' : False,
}

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
