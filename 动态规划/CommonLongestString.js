/**
 * Created by acemood on 14-11-30.
 * @fileoverview 用于求解两个字符串中最大公共子串的算法. 关键实现来自于
 * 《JavaScript实现的数据结构和算法》一书, 但oslojs框架中string.util
 * 模块中也有相关实现并注明了原始出处.
 */

// 两个字符串
var word1, word2;
var lcsarr;

// 保存最大公共串长度
var max = 0;
var index = 0;

// 打印结果
function print(ret) {
    var str = "";
    for(var i = 0; i <= word2.length; ++i) {
        for(var j = 0; j <= word1.length; ++j) {
            str += ("   " + lcsarr[j][i]);
        }
        str += "\n";
    }

    console.log(str);

    console.log("\n The result is: " + ret);
}

// 初始化二维数组各项为0
function init() {
    lcsarr = new Array(word1.length + 1);
    for(var i = 0; i <= word1.length; ++i) {
        lcsarr[i] = new Array(word2.length + 1);
        for(var j = 0; j <= word2.length; ++j) {
            lcsarr[i][j] = 0;
        }
    }
}

// 算法主体部分
function exec() {
    for (var i = 0; i <= word1.length; ++i) {
        for(var j = 0; j <= word2.length; ++j) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    var str = "";
    if (max == 0) {
        return "";
    } else {
        for (var i = index - max; i <= max; ++i) {
            str += word2[i];
        }
        return str;
    }

}

// 主入口函数, 提供两个长字符串
function lcs(w1, w2) {
    if (!w1 || !w2) return;

    word1 = w1;
    word2 = w2;
    // 初始化
    init();
    // 主体执行部分
    var ret = exec();
    print(ret);
}

lcs("abbcc", "dbbcc");
