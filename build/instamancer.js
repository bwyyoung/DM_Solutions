"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Instamancer = __importStar(require("instamancer"));
module.exports =
    {
        foo: function () {
            test_instamancer();
        }
    };
function test_instamancer() {
    const options = {
        total: 100000,
        enableGrafting: true,
        silent: false,
        fullAPI: true
    };
    const hashtag = Instamancer.hashtag("sgmom", options);
    (async () => {
        for await (const post of hashtag) {
            console.log(JSON.stringify(post));
        }
    })();
}
/*
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFtYW5jZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmNfdHMvaW5zdGFtYW5jZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEseURBQTJDO0FBRTNDLE1BQU0sQ0FBQyxPQUFPO0lBQ2I7UUFDQyxHQUFHLEVBQUU7WUFFSixnQkFBZ0IsRUFBRSxDQUFBO1FBQ25CLENBQUM7S0FDRCxDQUFBO0FBR0YsU0FBUyxnQkFBZ0I7SUFFeEIsTUFBTSxPQUFPLEdBQ2I7UUFDQyxLQUFLLEVBQUUsTUFBTTtRQUNiLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFLElBQUk7S0FDYixDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNYLElBQUksS0FBSyxFQUFFLE1BQU0sSUFBSSxJQUFJLE9BQU8sRUFDaEM7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNsQztJQUNGLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDTixDQUFDO0FBSUQ7Ozs7Ozs7Ozs7OztLQVlLIn0=