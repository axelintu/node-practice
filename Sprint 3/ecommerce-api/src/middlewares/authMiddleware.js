import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
	const token = req.headers["autorization"]?.split(" ")[1];
	if (!token) {
		return res.status(401).json({ message: "Unauthorized." });
	}
	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res
				.status(401)
				.json({ message: "Invalid or expired token" });
		}
		req.user = decoded;
		next();
	})
};

export default authMiddleware;
