var decode = function(encoded, first) {
        let arr = [encoded.length + 1]
        res[0] = first;
        for(let i = 0; i < encoded.length; i++){
            res[i+1] = encoded[i] ^ res[i];
        }
        return res;
};