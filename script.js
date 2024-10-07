document.getElementById('mbti-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 初始化每个维度的分数
    let scoreE = 0, scoreI = 0;
    let scoreS = 0, scoreN = 0;
    let scoreT = 0, scoreF = 0;
    let scoreJ = 0, scoreP = 0;

    // 获取用户的回答并为每个维度打分
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    
    answers.forEach(answer => {
        switch(answer.name) {
            case 'q1':
            case 'q2':
                if (answer.value === 'E') scoreE++;
                else scoreI++;
                break;
            case 'q3':
            case 'q4':
                if (answer.value === 'S') scoreS++;
                else scoreN++;
                break;
            case 'q5':
            case 'q6':
                if (answer.value === 'T') scoreT++;
                else scoreF++;
                break;
            case 'q7':
            case 'q8':
                if (answer.value === 'J') scoreJ++;
                else scoreP++;
                break;
        }
    });

    // 计算 MBTI 类型
    const type = (scoreE > scoreI ? 'E' : 'I') +
                 (scoreS > scoreN ? 'S' : 'N') +
                 (scoreT > scoreF ? 'T' : 'F') +
                 (scoreJ > scoreP ? 'J' : 'P');

    // 显示结果
    document.getElementById('result').innerText = '你的 MBTI 类型是：' + type;

    // 获取结果的详细说明
    const description = getDescription(type);
    
    // 显示详细说明
    document.getElementById('result-description').innerHTML = description;
});

// 解释不同MBTI类型的函数
function getDescription(type) {
    const descriptions = {
        "ISTJ": "你是 ISTJ 类型：可靠且负责任，注重事实和细节。",
        "ISFJ": "你是 ISFJ 类型：体贴和忠诚，注重他人需求。",
        "INFJ": "你是 INFJ 类型：富有洞察力和理想主义，关心未来。",
        "INTJ": "你是 INTJ 类型：逻辑性强，注重计划与效率。",
        "ISTP": "你是 ISTP 类型：务实且独立，善于解决问题。",
        "ISFP": "你是 ISFP 类型：柔和且灵活，珍视个人体验。",
        "INFP": "你是 INFP 类型：理想主义者，富有创造力。",
        "INTP": "你是 INTP 类型：分析能力强，喜欢探索抽象概念。",
        "ESTP": "你是 ESTP 类型：冒险精神，喜欢面对挑战。",
        "ESFP": "你是 ESFP 类型：乐观且活跃，擅长社交。",
        "ENFP": "你是 ENFP 类型：充满活力且富有创造性，重视自由。",
        "ENTP": "你是 ENTP 类型：聪明且有趣，喜欢辩论和创新。",
        "ESTJ": "你是 ESTJ 类型：有条理且注重现实，喜欢管理和组织。",
        "ESFJ": "你是 ESFJ 类型：温暖且关怀他人，擅长团队合作。",
        "ENFJ": "你是 ENFJ 类型：富有同理心，关心他人的需求。",
        "ENTJ": "你是 ENTJ 类型：天生的领导者，注重效率和成果。"
    };

    return descriptions[type] || "抱歉，未能确定您的 MBTI 类型。";
}
