import * as d3 from 'd3';

export const findObj = (array, key, value) => {
    return array.find(x => {
       return x[key] === value
    });
}

export const findObjRemoveSS = (array, key, value) => {
    return array.find(x => {
       return x[key].replace(/[^\w\s]/gi, '').replace(/\s+/g, '').toLowerCase() === value
    });
}

export const wordwrap = (text, max) => {
    var regex = new RegExp(".{0," + max + "}(?:\\s|$)", "g");
    var lines = []

    var line
    // eslint-disable-next-line
    while ((line = regex.exec(text)) != "") {
        line[0] = line[0].trim()
        lines.push(line);
    }

    return lines
}

export const stackBarChartData = (data, keyWord) => {
    var key = Object.keys(data[1])
    var objData = key.slice(2).map(function (i) {
        return {
            fyear: i,
            values: data.map(function (d) {
                return {
                    key: d[keyWord],
                    value: d[i],
                    name: d[keyWord].replace(/[^A-Z0-9]+/ig, "")
                }
            })
        }
    })

    var lastObjData = objData.slice(-4)
    let keyName = {};
    lastObjData[0].values.map(function (x) {
        return keyName[x["name"]] = x.key
    })

    let keys = [];
    lastObjData[0].values.map(function (x) {
        if (!keys.includes(x.key)) {
            return keys.push(x.key)
        }
        return keys
    })

    let newData = [];

    lastObjData.forEach(d => {
        var tempObj = {}
        tempObj["fyear"] = d.fyear;
        d.values.forEach(e => {
            tempObj[e.key.replace(/[^A-Z0-9]+/ig, "")] = e.value;
        })
        newData.push(tempObj);
    });

    var subgroups = Object.keys(newData[0]).slice(1);

    var stackedData = newData.map(function (d) {
        var orderedKeys = subgroups.slice().sort(function (a, b) {
            return d[b] - d[a];
        });
        var bottom = 0;

        var result = orderedKeys.map(function (key) {
            var value = d[key];
            var result = [bottom, bottom + value];
            result.data = d;
            result.key = key;
            bottom += value;
            return result;
        });
        result.key = d.fyear;
        return result;
    });

    return { stackedData, lastObjData };
}

export const stackWithPadding = (stack, padding) => {
    var min = d3.min(stack[0].map(d => d[0]));
    var max = d3.max(stack[stack.length - 1].map(d => d[1]));
    var range = Math.abs(max - min);
    var paddingSize = range * padding;
    stack.forEach((section, index) => {
        section.forEach((item, index) => {
            if (index === 0) { return; }
            item[0] = item[0] + paddingSize;
        });
    });
    return stack;
};

