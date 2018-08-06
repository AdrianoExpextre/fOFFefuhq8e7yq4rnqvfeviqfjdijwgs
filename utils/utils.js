const fs = require('fs');

exports.save = function(file, ext, data, minSize = 5) {
	return new Promise((resolve, reject) => {
		if (!file || !ext || !data)
			return reject(new Error('Args inválidos'));
		if (file.startsWith('/')) file = file.substr(1);
		if (!ext.startsWith('.')) ext = '.' + ext;

		fs.writeFile(`${__dirname}/../${file}-temp${ext}`, data, error => {
			if (error) {
				reject(error);
			} else {
				fs.stat(`${__dirname}/../${file}-temp${ext}`, (err, stats) => {
					if (err) {
						reject(err);
					} else if (stats["size"] < minSize) {
						resolve(false);
					} else {
						fs.rename(`${__dirname}/../${file}-temp${ext}`, `${__dirname}/../${file}${ext}`, e => {
							if (e) {
								reject(e);
							} else
								resolve(true);
						});
					}
				});
			}
		});
	});
};