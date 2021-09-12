module.exports.config = {
	name: "covid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ManhG",
	description: "Lấy thông tin về tình hình dịch bệnh COVID-19",
	commandCategory: "news",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.languages = {
	vi: {
		return: "====== Thế Giới ======\n😷 Nhiễm: %1\n💚 Đã hồi phục: %2\n💀 Tử vong: %3\n====== Việt Nam ======\n😷 Nhiễm: %4\n😎 Điều trị: %5\n💚 Đã hồi phục: %6\n💀 Tử vong: %7\n🤨 Nhiễm 7 ngày: %8\n❤ Hồi phục 7 ngày: %9\n☠️ Tử vong 7 ngày: %10\n\n Thời gian: %11"
	},
	en: {
		return: "====== World ======\n😷 Cases: %1\n😎 Treating: %2\n💚 Recovered: %3\n💀 Deaths: %4\n====== VietNam ======\n😷 Cases: %5\n😎 Treating: %6\n💚 Recovered: %7\n💀 Deaths: %8\n📰 News: %8\nData is updated at: %8 (UTC +7)"
	}
}, module.exports.run = async function({
	api: e,
	event: n,
	getText: a
}) {
	const t = global.nodemodule.axios;
	let i = await t.get("https://static.pipezero.com/covid/data.json");
	var o = (await i.data).today,
		s = (await i.data).overview[6],
		d = o.world || {};
	return e.sendMessage(a("return", d.cases, d.recovered, d.death, s.cases, s.treating, s.recovered, s.death, s.avgCases7day, s.avgRecovered7day, s.avgDeath7day, s.date), n.threadID, n.messageID)
};
