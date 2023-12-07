KEY_MAP = {
  "ha": "ሀ", "hu": "ሁ", "hi": "ሂ", "haa": "ሃ", "he": "ሄ", "h": "ህ", "ho": "ሆ",
  "'ha": "ሐ", "'hu": "ሑ", "'hi": "ሒ", "'haa": "ሓ", "'he": "ሔ", "'h": "ሕ", "'ho": "ሖ", "'hua": "ሗ",
  "^ha": "ኸ", "^hu": "ኹ", "^hi": "ኺ", "^ha": "ኻ", "^he": "ኼ", "^h": "ኽ", "^ho": "ኾ",
  "la": "ለ", "lu": "ሉ", "li": "ሊ", "laa": "ላ", "le": "ሌ", "l": "ል", "lo": "ሎ", "lua": "ሏ",
  "ma": "መ", "mu": "ሙ", "mi": "ሚ", "maa": "ማ", "me": "ሜ", "m": "ም", "mo": "ሞ", "mua": "ሟ",
  "sa": "ሰ", "su": "ሱ", "si": "ሲ", "saa": "ሳ", "se": "ሴ", "s": "ስ", "so": "ሶ", "sua": "ሷ",
  "'sa": "ሠ", "'su": "ሡ", "'si": "ሢ", "'saa": "ሣ", "'se": "ሤ", "'s": "ሥ", "'so": "ሦ",
  "ra": "ረ", "ru": "ሩ", "ri": "ሪ", "raa": "ራ", "re": "ሬ", "r": "ር", "ro": "ሮ", "rua": "ሯ",
  "^sa": "ሸ", "^su": "ሹ", "^si": "ሺ", "^saa": "ሻ", "^se": "ሼ", "^s": "ሽ", "^so": "ሾ", "^sua": "ሿ",
  "qa": "ቀ", "qu": "ቁ", "qi": "ቂ", "qaa": "ቃ", "qe": "ቄ", "q": "ቅ", "qo": "ቆ", "qua": "ቇ",
  //"'qa": "ቐ", "'qu": "ቑ", "'qi": "ቒ", "'qaa": "ቓ", "'qe": "ቔ", "'q": "ቕ", "'qo": "ቖ",
  "va":"ቨ", "vu":"ቩ",  "vi":"ቪ","vaa":"ቫ" ,  "ve":"ቬ", "v":"ቭ", "vo":"ቮ", "vua":"ቯ" ,
  "ba": "በ", "bu": "ቡ", "bi": "ቢ", "baa": "ባ", "be": "ቤ", "b": "ብ", "bo": "ቦ", "bua": "ቧ",
  "ta": "ተ", "tu": "ቱ", "ti": "ቲ", "taa": "ታ", "te": "ቴ", "t": "ት", "to": "ቶ", "tua": "ቷ",
  "'ta": "ጠ", "'tu": "ጡ", "'ti": "ጢ", "'taa": "ጣ", "'te": "ጤ", "'t": "ጥ", "'to": "ጦ", "'tua": "ጧ",
  "cha": "ቸ", "chu": "ቹ", "chi": "ቺ", "chaa": "ቻ", "che": "ቼ", "ch": "ች", "cho": "ቾ", "chua": "ቿ",
  "na": "ነ", "nu": "ኑ", "ni": "ኒ", "naa": "ና", "ne": "ኔ", "n": "ን", "no": "ኖ", "nua": "ኗ",
  "^na": "ኘ", "^nu": "ኙ", "^ni": "ኚ", "^naa": "ኛ", "^ne": "ኜ", "^n": "ኝ", "^no": "ኞ", "^no": "ኟ",
  "^a": "አ", "^u": "ኡ", "^i": "ኢ", "^aa": "ኣ", "^e": "ኤ", "^a'": "እ", "^o": "ኦ", "^ua": "ኧ",
  "'a": "ዐ", "'u": "ዑ", "'i": "ዒ", "'aa": "ዓ", "'e": "ዔ", "'a'": "ዕ", "'o": "ዖ",
  "ka": "ከ", "ku": "ኩ", "ki": "ኪ", "kaa": "ካ", "ke": "ኬ", "k": "ክ", "ko": "ኮ", "kua": "ኯ",
  "wa": "ወ", "wu": "ዉ", "wi": "ዊ", "waa": "ዋ", "we": "ዌ", "w": "ው", "wo": "ዎ",
  "za": "ዘ", "zu": "ዙ", "zi": "ዚ", "zaa": "ዛ", "ze": "ዜ", "z": "ዝ", "zo": "ዞ", "zua": "ዟ",
  "^za": "ዠ", "^zu": "ዡ", "^zi": "ዢ", "^zaa": "ዣ", "^ze": "ዤ", "^z": "ዥ", "^zo": "ዦ", "^zua": "ዧ",
  "ya": "የ", "yu": "ዩ", "yi": "ዪ", "yaa": "ያ", "ye": "ዬ", "y": "ይ", "yo": "ዮ", "yua": "ዯ",
  "da": "ደ", "du": "ዱ", "di": "ዲ", "daa": "ዳ", "de": "ዴ", "d": "ድ", "do": "ዶ", "dua": "ዷ",
  "'da": "ዸ", "'du": "ዹ", "'di": "ዺ", "'daa": "ዻ", "'de": "ዼ", "'d": "ዽ", "'do": "ዾ", "'dua": "ዿ",
  "^pa": "ጰ", "^pu": "ጱ", "^pi": "ጲ", "^paa": "ጳ", "^pe": "ጴ", "^p": "ጵ", "^po": "ጷ",
  "^tsa": "ፀ", "^tsu": "ፁ", "^tsi": "ፂ", "^tsaa": "ፃ", "^tse": "ፄ", "^ts": "ፅ", "^tso": "ፆ", "^tsua": "ፇ",
  "'tsa": "ጸ", "'tsu": "ጹ", "'tsi": "ጺ", "'tsa": "ጻ", "'tse": "ጼ", "'ts": "ጽ", "'tso": "ጾ", "'tsua": "ጿ",
  "ja": "ጀ", "ju": "ጁ", "ji": "ጂ", "jaa": "ጃ", "je": "ጄ", "j": "ጅ", "jo": "ጆ", "jua": "ጇ",
  "ga": "ገ", "gu": "ጉ", "gi": "ጊ", "gaa": "ጋ", "ge": "ጌ", "g": "ግ", "go": "ጎ", "gua": "ጏ",
  "'ga": "ጘ", "'gu": "ጙ", "'gi": "ጚ", "'gaa": "ጛ", "'ge": "ጜ", "'g": "ጝ", "'go": "ጞ", "'gua": "ጟ",
  "'ca": "ጨ", "'cu": "ጩ", "'ci": "ጪ", "'caa": "ጫ", "'ce": "ጬ", "'c": "ጭ", "'co": "ጮ", "'cua": "ጯ",
  "fa": "ፈ", "fu": "ፉ", "fi": "ፊ", "faa": "ፋ", "fe": "ፌ", "f": "ፍ", "fo": "ፎ", "fua": "ፏ",
  "pa": "ፐ", "pu": "ፑ", "pi": "ፒ", "paa": "ፓ", "pe": "ፔ", "p": "ፕ", "po": "ፖ", "pua": "ፗ",
  //NUMERALS, ARE NOT YET HANDLED IN THE CODE
  "1": "፩", "2": "፪", "3": "፫", "4": "፬", "5": "፭", "6": "፮", "7": "፯", "8": "፰", "9": "፱", "10": "፲",
  "20": "፳", "30": "፴", "40": "፵", "50": "፶", "60": "፷", "70": "፸", "80": "፹", "90": "፺", "100": "፻",
  "10000": "፼"
};

function match_key(word, conv_tbl) {
  let matched_key = "";
  for (var key in conv_tbl) {
    if (key.length > word.length)
      continue;

    let match = true;
    for (let i = 0; i < key.length; i++) {
      if (key.charAt(i) != word.charAt(i)) {
        match = false;
        break;
      }
    }

    if (match) {
      if (matched_key == "") {
        matched_key = key;
      } else {
        if (key.length > matched_key.length)
          matched_key = key;
      }
    }
  }

  if (matched_key != "")
    return [matched_key, conv_tbl[matched_key]]; //no match found
  else
    return []
}

function to_geez(english_str, conv_tbl) {
  let lines = english_str.split('\n')
  let sconverted = ""
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim()
    let winp = line.split(' ');
    for (let i = 0; i < winp.length; i++) {
      let wout = ""; //Amharic output. A unicode string
      let word = winp[i];
      while (word.length != 0) {
        let matched = match_key(word, conv_tbl); // {en_key,am_equivalent}
        if (matched.length != 2) {
          wout = wout.concat(word);
          break;
        }
        wout = wout.concat(matched[1]); //append translation token.
        //trim from the front
        word = word.substr(matched[0].length, word.lenght)
      }

      sconverted = sconverted.concat(wout);
      if (i != winp.lenght)
        sconverted = sconverted.concat(" ");
    }

    if (i != lines.lenght - 1)
      sconverted = sconverted.concat("\n");
  }

  return sconverted;
}
