module.exports = function toReadable(number) {

    var nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    var dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ];

    if (number < 20) {
        return nums[number];
    }

    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return dozens[number / 10];
        } else return (dozens[Math.floor(number / 10)] + ' ' + nums[number % 10]);
    }

    if (number > 99) {
        if (number % 100 == 0) {
            return nums[number / 100] + ' ' + 'hundred';
        } else if (number % 10 == 0) {
            return (nums[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
                dozens[(Math.floor(number / 10)) % 10]);
        } else if (number % 100 < 20) {
            return (nums[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
                nums[number % 100]);
        } else return (nums[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
            dozens[(Math.floor(number / 10)) % 10] + ' ' + nums[number % 10])
    }
}