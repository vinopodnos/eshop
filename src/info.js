import pkgj from "../package.json";

const info = {
	version: pkgj.version,
	devel: process.env.REACT_APP_ENV === "development",
};

export default info;
