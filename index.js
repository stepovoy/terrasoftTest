console.log(`Задание:

    Реализовать программу анализа текста. Входной текст произвольный и может быть большим по объему. Количество и содержание метрик определяется самостоятельно. Требования к алгоритму: Программа должна быть расширяема к изменению списку метрик. Масштабируемость.

    Метрики можете предлагать самостоятельно, например самый частый символ или количество восклицательных предложений. Процент существительных слов в тексте и т.д.`);

const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus mollis metus sed condimentum. Suspendisse sit amet risus posuere, vestibulum purus ut, suscipit leo. Vivamus semper porta dui, et tempus purus semper at. Mauris condimentum, nulla sed lobortis scelerisque, neque urna hendrerit nisi, posuere accumsan erat mi auctor risus. Aenean blandit orci leo, sit amet tristique velit laoreet eu. Vestibulum ligula nulla, accumsan ut nibh in, lobortis rhoncus quam. Mauris eget volutpat nunc, eget convallis velit. Pellentesque porta et quam in posuere. Proin turpis augue, luctus vel aliquet eget, volutpat tempus diam. Suspendisse non ultricies neque. Nam aliquam sapien quis iaculis tempus. Morbi at sapien ut lacus laoreet mollis a a nisl. Sed ultrices ullamcorper hendrerit. Nulla et ex efficitur, molestie felis at, viverra turpis.

Sed nec mi turpis! Nullam lacinia, leo non vulputate vehicula, purus nulla ultrices enim, in vehicula odio orci ornare eros. Etiam vel velit quis elit porta ultrices. Sed ut blandit ipsum. Cras sem ligula, facilisis sit amet lacus id, auctor congue ante. Maecenas consequat elementum neque, eget volutpat urna dignissim in. Maecenas suscipit lectus non sapien elementum pharetra. Integer vestibulum rutrum dolor ac placerat. Nullam non metus dui. Curabitur rutrum a nulla eu malesuada.

Maecenas ut sem et mauris ullamcorper elementum. Nunc aliquet iaculis odio, imperdiet dapibus magna. Proin aliquam congue purus, et commodo nulla scelerisque id. Curabitur rhoncus mauris quis fringilla venenatis. Quisque volutpat tempor posuere. Duis egestas eleifend nisl, et hendrerit neque lacinia at. Suspendisse porttitor eget tellus sit amet facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In aliquam orci sit amet orci sagittis, quis porta ex rhoncus. Cras iaculis dapibus ante eget vehicula. Ut blandit, quam nec accumsan tincidunt, enim nulla pellentesque massa, quis commodo magna mauris in nibh. Pellentesque viverra blandit porta. Nullam vehicula ac orci non tempor. Curabitur interdum sagittis velit, at semper magna dictum ac. Vestibulum lacinia, purus eu consectetur accumsan, ex risus viverra mi, sed bibendum purus risus id lacus. Vestibulum commodo mattis orci non accumsan.

Donec ornare odio arcu! Praesent nec rutrum tellus, tincidunt efficitur risus. Quisque iaculis mollis sapien sed ultricies. Nullam vitae nisi velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec egestas placerat augue at ullamcorper. Maecenas laoreet mattis diam. Nunc consequat cursus suscipit. Nam malesuada vehicula metus id sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ipsum nisl. Cras aliquet, ligula id sagittis convallis, sem orci fringilla odio, vitae scelerisque sapien magna iaculis ante. Duis laoreet mauris neque, ut tincidunt ex gravida ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue porta massa, a egestas quam rhoncus id. Vivamus vestibulum sapien lorem, ut blandit justo finibus et.

Vivamus rhoncus finibus metus ut venenatis. Cras sed facilisis dolor, a bibendum mi. Donec sit amet risus accumsan, pulvinar purus eu, pretium ligula. Etiam sed nunc nisi. Ut convallis non arcu ac ultrices. Nullam sit amet augue ac felis sodales accumsan vitae in odio. Aenean eget leo ac dui pharetra feugiat eget ut ipsum. Sed tincidunt quis augue ac porttitor. Fusce ac finibus tortor. Aliquam tempus sem sem, eu finibus est mattis efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut imperdiet nunc ac blandit mattis. Integer vitae augue nibh. Nulla in vulputate orci. Aliquam consequat venenatis enim, ac cursus ipsum tempor sit amet. Vivamus vel est vulputate, convallis neque imperdiet, tristique quam.`;

let getMostUsedSymbol = (str => {
    let obj = {};

    str.split('').forEach((char) => {
        char = char.toLowerCase();
        if (!obj[char]) {
            obj[char] = 1;
        }
        else {
            obj[char]++;
        }
    });

    const maxValue = Math.max.apply(Math, Object.values(obj));

    const mostUsedSymbol = Object.keys(obj).filter(key => { return obj[key] === maxValue });

    console.log('Most used symbol in the text is:', mostUsedSymbol);
});

let getExclamatorySentencesQuantity = (str => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if ((str[i] === '!') && (str[i + 1] === ' ' || str[i + 1] === '\n' || !str[i + 1])) {
            count++;
        }
    }

    console.log('Number of exclamatory sentences:', count);
});

let analyze = ((str, ...params) => {
    // console.log(params);
    try {
        params.forEach(func => {
            if (typeof eval(func) === "function") {
                eval(func + '(`' + str + '`)');
            }
            else {
                console.log('Unknown function called');
            }
        })
    } catch (e) {
        console.log('Unknown function called');
    }
});

analyze(str, 'getMostUsedSymbol', 'getExclamatorySentencesQuantity'); // proper function names

console.log();

analyze(str, 'getMostUsedSymbol', 'getExclamatorySentencesQuantity', 'someUnknownFunction'); // unknown function name included

