# J.A.R.V.I.S

Discord bot

## Setup

Copy `.env.sample` to `.env` and update accordingly.

```sh
cp .env.sample .env
```

## Permissions required

* Change Nickname
* Manage Nickname

## How to add a new command

Add a new file in the `commands` folder

```javascript
export default {
    name: 'command name',
    description: 'short command description',

    run: (client, message, args) => {
        // add code here
    }
}
```