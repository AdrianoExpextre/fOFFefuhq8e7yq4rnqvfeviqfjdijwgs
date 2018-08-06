var _chalk = require('chalk'),
	chalk = new _chalk.constructor({enabled: true});

class Logger {
    constructor(logTimestamp) {
    	this.logTimestamp = !!logTimestamp;
    }
    
    get timestamp() {
		return this.logTimestamp === true ? `[${new Date().toLocaleString()}] ` : '';
	}
    
    log(text, color) {
		return console.log(this.timestamp + (color ? chalk[color](text) : text));
	}

	logWithBackground(text, background, color) {
		return console.log(this.timestamp + (color ? chalk[background][color](text) : chalk[background](text)));
	}

	logBold(text, color) {
		return console.log(this.timestamp + (color ? chalk.bold[color](text) : chalk.bold(text)));
	}

	logWithUnderline(text, color) {
		return console.log(this.timestamp + (color ? chalk.underline[color](text) : chalk.underline(text)));
	}
	
	logWithHeader(headerText, headerBackground, headerColor, text, color) {
		return console.log(this.timestamp + chalk[headerBackground][headerColor || 'black'](` ${headerText} `), (color ? chalk[color](text) : text));
	}
	
	logCommand(guildName, userName, commandName, suffix) {
		if (guildName)
			return console.log(this.timestamp + `${chalk.bold.magenta(guildName)} >> ${chalk.bold.green(userName)} > ${this.commandColor === undefined ? commandName : chalk.bold[this.commandColor](commandName)} ${suffix}`);
		return console.log(this.timestamp + `${chalk.bold.green(userName)} > ${this.commandColor === undefined ? commandName : chalk.bold[this.commandColor](commandName)} ${suffix}`);
	}

	warn(text, wText = 'AVISO') {
		return console.log(this.timestamp + `${chalk.bgYellow.black(` ${wText} `)} ${text}`);
	}

	error(text, eText = 'ERRO') {
		return console.log(this.timestamp + `${chalk.bgRed.black(` ${eText} `)} ${text}`);
	}

	debug(text, dText = 'DEBUG') {
		return console.log(this.timestamp + `${chalk.bgWhite.black(` ${dText} `)} ${text}`);
	}
}

module.exports = Logger;