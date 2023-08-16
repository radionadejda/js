// const grades = [];
// for (let i = 0; i < 12; i++) {
// 	const randomGrade = Math.floor(Math.random() * 100) + 1;
// 	grades.push(randomGrade);
// }

let showGrades = () => {
	const grades = [];
	for (let i = 0; i < 12; i++) {
		const randomGrade = Math.floor(Math.random() * 100) + 1;
		grades.push(randomGrade);
	}
	const averageGrade = (grades.reduce((sum, grade) => sum + grade) / grades.length).toFixed(2);
	const maxGrade = Math.max(...grades);
	const minGrade = Math.min(...grades);
	const positiveGradesCount = grades.filter((grade) => grade >= 60).length;
	const negativeGradesCount = grades.filter((grade) => grade < 60).length;
	// const negativeGradesCount = grades.length - positiveGradesCount;

	const letterGrades = grades.map((grade) => {
		if (grade >= 80) return 'A';
		if (grade >= 60) return 'B';
		if (grade >= 40) return 'C';
		if (grade >= 20) return 'D';
		if (grade < 20) return 'E';
	});

	const resultsDiv = document.getElementById('results');
	resultsDiv.innerHTML = `<p>результаты: ${grades.join(', ')}</p>
    <p>Средняя оценка: ${averageGrade}</p>
    <p>Максимальная оценка: ${maxGrade}</p>
    <p>Минимальная оценка: ${minGrade}</p>
    <p>Количество положительных отметок: ${positiveGradesCount}</p>
    <p>Количество отрицательных отметок: ${negativeGradesCount}</p>
    <p>Буквенные обозначения отметок: ${letterGrades.join(', ')}</p>`;
};

document.querySelector('#showResults').onclick = showGrades;

const clear = () => {
	location.reload();
};
document.querySelector('#removeResults').onclick = clear;
