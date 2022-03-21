let message;
message = 'abc';

let endsWithC = (<string>message).endsWith('c'); //more common alternative
let anotherWay = (message as string).endsWith('c'); //alternative Way

