const grades = [];
for (let i = 0; i < 12; i++) {
	const randomGrade = Math.floor(Math.random() * 100) + 1;
	grades.push(randomGrade);
}

document.getElementById("showResults").addEventListener("click", function() {
	const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
	const maxGrade = Math.max(...grades);
	const minGrade = Math.min(...grades);
	const positiveGradesCount = grades.filter(grade => grade >= 60).length;
	const negativeGradesCount = grades.filter(grade => grade < 60).length;

	const letterGrades = grades.map(grade => {
		if (grade >= 80) return "A";
		if (grade >= 60) return "B";
		if (grade >= 40) return "C";
		if (grade >= 20) return "D";
		return "E";
	});

	const resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML =
    `<p>результаты: ${grades.join(", ")}</p>
    <p>Средняя оценка: ${averageGrade.toFixed(2)}</p>
    <p>Максимальная оценка: ${maxGrade}</p>
    <p>Минимальная оценка: ${minGrade}</p>
    <p>Количество положительных отметок: ${positiveGradesCount}</p>
    <p>Количество отрицательных отметок: ${negativeGradesCount}</p>
    <p>Буквенные обозначения отметок: ${letterGrades.join(", ")}</p>`;
});

const clear = () => {
	location.reload();
};
document.querySelector("#removeResults").onclick = clear;
