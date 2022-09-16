const findValue = (source, valueName) => {
    value = source.find(e => e[valueName].length > 0);
    return value[valueName];
}



