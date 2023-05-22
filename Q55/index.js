function toCheck(str){
    const str_p = str.replace(/[^p]/g, "")
    const str_t = str.replace(/[^t]/g, "")

    const p_num = str_p.length
    const t_num = str_t.length

    return p_num === t_num
}

console.log(toCheck("paatp"))