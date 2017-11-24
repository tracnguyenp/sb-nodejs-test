/**
 * Created by tracnguyen on 11/23/17.
 */

module.exports.mainConfigs = {
    'basePath': __dirname + '/..',
    'components': {
        'signup': {
            'class': 'inc/Signup',
            'responseData': {
                'www.shopback.sg': {
                    'unit': 'SGD',
                    'amount': 5,
                },
                'www.shopback.my': {
                    'unit': 'MYR',
                    'amount': 10,
                },
                'www.shopback.co.id': {
                    'unit': 'IDR',
                    'amount': 25000,
                },
                'www.shopback.com.tw': {
                    'unit': 'TWD',
                    'amount': 1000,
                },
                'www.myshopback.co.th': {
                    'unit': 'THB',
                    'amount': 500,
                },
                'www.shopback.com': {
                    'unit': 'USD',
                    'amount': 5,
                }
            }
        },
        'spend': {
            'class': 'inc/Spend',
        },
        'redeem': {
            'class': 'inc/Redeem',
            'responseData': {
                'www.shopback.sg': {
                    'destination': 'https://www.shopback.sg'
                },
                'www.shopback.my': {
                    'destination': 'https://www.shopback.my'
                },
                'www.shopback.co.id': {
                    'destination': 'https://www.shopback.co.id'
                },
                'www.shopback.com.tw': {
                    'destination': 'https://www.shopback.com.tw'
                },
                'www.myshopback.co.th': {
                    'destination': 'https://www.myshopback.co.th'
                },
                'www.shopback.com': {
                    'destination': 'https://www.shopback.com'
                }
            }
        }
    }
};