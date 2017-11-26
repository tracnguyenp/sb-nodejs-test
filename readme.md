### Basic Ideas
- Use Singleton to set up the App for having one instance of application
- Use Factory Method to define components belong to application
- Lazy loading, component loaded only when respective action called

### Configuration
- Config file consists of basic params for application
- Each component declared in config file to serve a single action of application
- Data passed to component defined the behaviors of action

### Overriding and Expanding
- To override behaviors of action, simply change the `class` in configuration and adding overriding behavior to new class
    - E.g: to override `signup` action
    ```
    'signup': {
        'class': 'inc/SignupExt', // Change classname here
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
    }
    ```
- Adding more actions by simply adding more components to configuration file
    - E.g: to add `withdraw` action
    ```
    'withdraw': {
        'class': 'inc/Withdraw', // path to Withdraw class here
        'responseData': {
            // Behaviors definition here
        }
    }
    ```

### Examples and Test
- `node shopback-calculator.js signup www.shopback.sg`
- `node shopback-calculator.js redeem www.shopback.com`
- `node shopback-calculator.js spend  20 100.3 19 4.4`
- npm install --dev then `./node_modules/mocha/bin/mocha tests` to run the test