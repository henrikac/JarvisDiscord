# J.A.R.V.I.S

Discord bot

## How to add a new command

- Add a new file in the `commands` folder

```javascript
export default {
    name: 'command name',
    description: 'short command description',

    run: (client, message, args) => {
        // add code here
    }
}
```