// You should implement your task here.


module.exports =
    function towelSort(matrix) {
        let arr = [];
        let arrNumb = [];

        matrix.forEach((subArr, index) => {


            if (index % 2 == 0) {
                arr.push(subArr);

            } else {
                let subArrReverc = subArr.reverse();
                arr.push(subArrReverc);

            }
        });
        arr.forEach(subArr => {
            if (subArr.length === 0) {
                arrNumb.push([]);
            }
            subArr.forEach(el => {
                arrNumb.push(el);
            });
        });

        return arrNumb;
    };
