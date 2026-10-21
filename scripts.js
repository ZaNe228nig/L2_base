1. function hasTwoCubeSums(target) {
  let ways = 0;
  const max = Math.cbrt(target);

  let x = 1;
  while (x <= max) {
    let y = x;
    while (y <= max) {
      if (x ** 3 + y ** 3 === target) ways++;
      y++;
    }
    x++;
  }

  return ways >= 2;
}
2. function ipv4Parser(ip, subnet) {
  const ipParts = ip.split('.').map(Number);
  const subnetParts = subnet.split('.').map(Number);
  
  let networkParts = [];
  let hostParts = [];
  
  for (let i = 0; i < 4; i++) {
    const net = ipParts[i] & subnetParts[i];
    networkParts.push(net);
    
    const host = ipParts[i] - net;
    hostParts.push(host);
  }
  
  return [networkParts.join('.'), hostParts.join('.')];
}
3. function whatCentury(year) {
  const num = Math.ceil(Number(year) / 100);
  const tail = num % 100;

  if (tail >= 11 && tail <= 13) return num + 'th';

  const lastDigit = num % 10;
  if (lastDigit === 1) return num + 'st';
  if (lastDigit === 2) return num + 'nd';
  if (lastDigit === 3) return num + 'rd';

  return num + 'th';
}
4. function findMissing(seq) {
  const diffs = seq.slice(1).map((v, i) => v - seq[i]);
  const commonStep = diffs[0] === diffs[1] ? diffs[0] : diffs[1];

  for (let idx = 0; idx < diffs.length; idx++) {
    if (diffs[idx] !== commonStep) {
      return seq[idx] + commonStep;
    }
  }
}
5. function primeFactors(value) {
  const parts = [];
  let rest = value;

  for (let divisor = 2; divisor <= rest; divisor++) {
    let exponent = 0;

    while (rest % divisor === 0) {
      exponent++;
      rest /= divisor;
    }

    if (exponent === 1) parts.push(`(${divisor})`);
    else if (exponent > 1) parts.push(`(${divisor}**${exponent})`);
  }

  return parts.join('');
}
6. function toWeirdCase(text) {
  const words = text.split(' ');
  const converted = words.map(word =>
    [...word].map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())).join('')
  );
  return converted.join(' ');
}
7. function wave(text) {
  return [...text]
    .map((ch, pos) => {
      if (ch === ' ') return null;
      return text.slice(0, pos) + ch.toUpperCase() + text.slice(pos + 1);
    })
    .filter(Boolean);
}
8. function expandedForm(value) {
  const digits = String(value).split('');
  const parts = [];

  digits.forEach((digit, idx) => {
    if (digit === '0') return;
    const zeros = '0'.repeat(digits.length - idx - 1);
    parts.push(digit + zeros);
  });

  return parts.join(' + ');
}
9. function solution(input) {
  const padded = input.length % 2 === 0 ? input : input + '_';
  const pairs = [];

  for (let pos = 0; pos < padded.length; pos += 2) {
    pairs.push(padded.substring(pos, pos + 2));
  }

  return pairs;
}
10. function bingo(ticket, targetWins) {
  const matches = ticket.filter(([word, code]) =>
    [...word].some(ch => ch.charCodeAt(0) === code)
  ).length;

  return matches >= targetWins ? 'Winner!' : 'Loser!';
}
11. function domainName(link) {
  const cleaned = link.replace(/^https?:\/\//, '').replace(/^www\./, '');
  return cleaned.split('.')[0];
}
12. function longest(words, rank) {
  const ordered = words
    .map((word, pos) => ({ word, pos }))
    .sort((left, right) =>
      right.word.length - left.word.length || left.pos - right.pos
    );

  return ordered[rank - 1].word;
}
13. function hexStringToRGB(color) {
  const clean = color.slice(1);
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}
14. function isCircleSorted(items) {
  const breaks = items.reduce((acc, val, i) => {
    const next = items[(i + 1) % items.length];
    return val > next ? acc + 1 : acc;
  }, 0);

  return breaks <= 1;
}
15. function howManyTimes(startStr, endStr) {
  const startTime = Date.parse(startStr.replace(' ', 'T') + 'Z');
  const endTime = Date.parse(endStr.replace(' ', 'T') + 'Z');

  let strikes = 0;
  let moment = new Date(startTime);
  moment.setUTCMinutes(0, 0, 0);
  let cursor = moment.getTime();

  if (cursor > startTime) cursor -= 60 * 60 * 1000;

  while (cursor <= endTime) {
    const current = new Date(cursor);
    const mins = current.getUTCMinutes();
    const hrs = current.getUTCHours();

    let hits = 0;
    if (mins === 0) {
      const h12 = hrs % 12;
      hits = h12 === 0 ? 12 : h12;
    } else if (mins === 30) {
      hits = 1;
    }

    for (let s = 0; s < hits; s++) {
      const strikeMoment = cursor + s * 1000;
      if (strikeMoment >= startTime && strikeMoment < endTime) strikes++;
    }

    cursor += 30 * 60 * 1000;
  }

  return strikes;
}
16. Array.prototype.square  = function() { return this.map(item => item ** 2); };
Array.prototype.cube    = function() { return this.map(item => item ** 3); };
Array.prototype.sum     = function() { return this.reduce((acc, item) => acc + item, 0); };
Array.prototype.average = function() { return this.length === 0 ? NaN : this.sum() / this.length; };
Array.prototype.even    = function() { return this.filter(item => item % 2 === 0); };
Array.prototype.odd     = function() { return this.filter(item => item % 2 !== 0); };
