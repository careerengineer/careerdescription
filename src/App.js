import React, { useState } from 'react';

export default function CareerTechWriter() {
  const [step, setStep] = useState('guide');
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    position: '',
    experience: '',
    contact: '',
    email: '',
    summary: ''
  });
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState({
    keywords: [],
    suggestions: '',
    keyAchievements: '',
    coreCompetencies: ''
  });
  const [projects, setProjects] = useState([{
    name: '',
    period: '',
    role: '',
    background: '',
    goal: '',
    tasks: '',
    achievement: '',
    insight: ''
  }]);

  const updateProject = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...projects, {
      name: '',
      period: '',
      role: '',
      background: '',
      goal: '',
      tasks: '',
      achievement: '',
      insight: ''
    }]);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const analyzeJD = () => {
    if (!jobDescription.trim()) {
      alert('직무 공고를 입력해주세요.');
      return;
    }

    const keywords = [];
    const jdLower = jobDescription.toLowerCase();
    
    const techKeywords = ['python', 'java', 'javascript', 'react', 'sql', 'aws', 'docker', 'kubernetes', 'git', 'api', 'node.js', 'typescript', 'vue', 'angular', 'spring', 'django', 'flask', 'tensorflow', 'pytorch', 'pandas', 'excel', 'power bi', 'tableau', 'figma', 'photoshop', 'illustrator', 'salesforce', 'sap', 'oracle', 'mongodb', 'postgresql', 'redis', 'elasticsearch', 'kafka', 'jenkins', 'github', 'jira', 'confluence'];
    const skillKeywords = ['분석', '개발', '설계', '관리', '기획', '운영', '최적화', '자동화', '데이터', '마케팅', '광고', '캠페인', '채용', '인사', '교육', '컨설팅', '전략', '연구', 'pm', '프로젝트'];
    const softSkills = ['협업', '커뮤니케이션', '리더십', '문제해결', '프로젝트관리', '팀워크', '의사소통'];

    techKeywords.forEach(keyword => {
      if (jdLower.includes(keyword)) keywords.push(keyword);
    });
    skillKeywords.forEach(keyword => {
      if (jobDescription.includes(keyword)) keywords.push(keyword);
    });
    softSkills.forEach(keyword => {
      if (jobDescription.includes(keyword)) keywords.push(keyword);
    });

    const uniqueKeywords = [...new Set(keywords)];

    setAnalysis({
      keywords: uniqueKeywords,
      suggestions: `분석된 핵심 키워드: ${uniqueKeywords.join(', ')}\n\n✅ 이 키워드들을 경력기술서에 자연스럽게 포함하세요:\n\n1. 1줄 소개에 직무와 관련된 키워드 3-5개 포함\n   예: "3년차 데이터 분석가로 Python과 SQL을 활용한 데이터 시각화 전문"\n\n2. 프로젝트 설명에서 사용한 기술과 방법론 명시\n   예: "Python과 SQL로 10만 건 데이터 처리"\n\n3. 성과를 작성할 때 JD의 우대사항과 연결\n   예: "Power BI로 대시보드 구축하여 의사결정 속도 향상"\n\n4. 같은 키워드를 2-3곳에서 다른 문맥으로 반복\n   - 1줄 소개, 대표 성과, 프로젝트 설명에 자연스럽게 분산`,
      keyAchievements: '',
      coreCompetencies: ''
    });

    setStep('analysis');
  };

  const downloadWord = () => {
    const docContent = `경력기술서

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【 인적사항 】
이름: ${personalInfo.name}
직무: ${personalInfo.position}
경력: ${personalInfo.experience}
연락처: ${personalInfo.contact}
이메일: ${personalInfo.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【 1줄 소개 】
${personalInfo.summary}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【 대표 성과 】
${analysis.keyAchievements || '(작성된 내용이 없습니다)'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【 핵심 역량 】
${analysis.coreCompetencies || '(작성된 내용이 없습니다)'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【 프로젝트 경험 】

${projects.map((project, index) => `
${index + 1}. ${project.name}
   기간: ${project.period}
   역할: ${project.role}

   ▪ 프로젝트 배경
   ${project.background || '(작성된 내용이 없습니다)'}

   ▪ 프로젝트 목표
   ${project.goal || '(작성된 내용이 없습니다)'}

   ▪ 자신의 역할 및 수행 내용
   ${project.tasks}

   ▪ 성과
   ${project.achievement}

   ▪ 인사이트 및 강조하고 싶은 부분
   ${project.insight || '(작성된 내용이 없습니다)'}

`).join('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

작성일: ${new Date().toLocaleDateString('ko-KR')}
`;

    // UTF-8 BOM 추가하여 한글 인코딩 문제 해결
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + docContent], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `경력기술서_${personalInfo.name || '작성자'}_${new Date().toISOString().slice(0,10)}.doc`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        <header style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderRadius: '8px'
        }}>
          <h1 style={{ margin: 0, fontSize: '2rem' }}>CareerEngineer</h1>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
            직무 공고 기반 맞춤형 경력기술서를 작성해보세요
          </p>
        </header>

        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          marginTop: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              {['guide', 'privacy', 'personal', 'jd', 'analysis', 'projects', 'preview'].map((s, i) => (
                <div key={s} style={{
                  flex: 1,
                  height: '4px',
                  background: ['guide', 'privacy', 'personal', 'jd', 'analysis', 'projects', 'preview'].indexOf(step) >= i ? '#667eea' : '#e0e0e0',
                  marginRight: i < 6 ? '0.5rem' : '0',
                  borderRadius: '2px'
                }} />
              ))}
            </div>
            <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', margin: 0 }}>
              {step === 'guide' && '1/7 단계: 가이드 읽기'}
              {step === 'privacy' && '2/7 단계: 개인정보 보호 안내'}
              {step === 'personal' && '3/7 단계: 인적사항 입력'}
              {step === 'jd' && '4/7 단계: 직무 공고 입력'}
              {step === 'analysis' && '5/7 단계: JD 분석 및 핵심 역량'}
              {step === 'projects' && '6/7 단계: 프로젝트 경험 작성'}
              {step === 'preview' && '7/7 단계: 미리보기 및 다운로드'}
            </p>
          </div>

          <div>
            {step === 'guide' && (
              <div>
                <h2 style={{ color: '#667eea', marginBottom: '1.5rem' }}>📘 경력기술서 작성 가이드</h2>
                
                <div style={{ 
                  background: '#f8f9ff', 
                  padding: '1.5rem', 
                  borderRadius: '8px',
                  marginBottom: '2rem',
                  border: '2px solid #667eea'
                }}>
                  <h3 style={{ color: '#667eea', marginTop: 0 }}>💡 경력기술서란?</h3>
                  <p style={{ lineHeight: '1.8', margin: '1rem 0' }}>
                    경력기술서는 당신의 <strong>경험, 기술, 성과</strong>를 정리해 채용 담당자에게 어필하는 문서입니다. 
                    ATS(자동 이력서 선별 소프트웨어)와 채용 담당자가 당신의 역량을 빠르게 이해하도록 돕습니다.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: '#667eea' }}>✅ 작성 핵심 원칙</h3>
                  <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
                    <li><strong>직무 공고와 연결:</strong> 지원 직무의 요구사항에 맞춰 경험을 강조하세요</li>
                    <li><strong>최신순 정렬:</strong> 최근 경력과 프로젝트를 먼저 작성하세요</li>
                    <li><strong>구체적으로:</strong> 역할과 성과를 숫자로 표현하세요 (예: "매출 10% 증가")</li>
                    <li><strong>역할 구분:</strong> 팀 성과와 나의 기여를 명확히 나눠 작성하세요</li>
                    <li><strong>간결하게:</strong> 1-2페이지, 핵심만 전달하세요</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: '#667eea' }}>🎯 직무 공고(JD) 기반 작성법</h3>
                  <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                    <p style={{ margin: 0, lineHeight: '1.8' }}>
                      <strong>JD를 분석해 자신의 경험을 연결하는 것이 핵심입니다!</strong>
                    </p>
                  </div>
                  
                  <h4 style={{ color: '#764ba2', marginTop: '1.5rem' }}>1단계: JD 분석 및 키워드 찾기</h4>
                  <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li><strong>필수 요건:</strong> 반드시 필요한 기술/경험 (예: "Python 3년 이상", "광고 캠페인 기획")</li>
                    <li><strong>우대 요건:</strong> 있으면 좋은 추가 자격 (예: "AWS 경험", "Google Ads 인증")</li>
                    <li><strong>키워드 분류:</strong>
                      <ul style={{ marginTop: '0.5rem' }}>
                        <li>기술: Python, Figma, Excel, Salesforce</li>
                        <li>업무: 데이터 분석, 캠페인 기획, 채용 관리, 교육 설계</li>
                        <li>소프트 스킬: 협업, 커뮤니케이션, 문제 해결</li>
                        <li>경험: 대규모 프로젝트, 고객 관리, 워크숍 운영</li>
                      </ul>
                    </li>
                  </ul>

                  <div style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                    <strong>예시:</strong>
                    <ul style={{ marginTop: '0.5rem', marginBottom: 0, paddingLeft: '1.2rem' }}>
                      <li><strong>개발자 JD:</strong> "Python으로 데이터 분석 2년 이상 (필수), Power BI 경험 (우대)"
                        <br/>→ 키워드: Python, 데이터 분석, Power BI</li>
                      <li><strong>마케터 JD:</strong> "디지털 광고 캠페인 운영 3년 이상 (필수), Google Analytics 경험 (우대)"
                        <br/>→ 키워드: 디지털 광고, 캠페인 운영, Google Analytics</li>
                      <li><strong>HR JD:</strong> "채용 프로세스 관리 경험 (필수), ATS 소프트웨어 경험 (우대)"
                        <br/>→ 키워드: 채용 관리, ATS, 인재 평가</li>
                    </ul>
                  </div>

                  <h4 style={{ color: '#764ba2', marginTop: '1.5rem' }}>2단계: 나의 경험과 연결하기</h4>
                  <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li><strong>직접 연결:</strong> JD와 똑같은 경험
                      <ul style={{ marginTop: '0.5rem' }}>
                        <li>개발자: JD "Python 데이터 분석" → "Python으로 고객 데이터 분석 3년"</li>
                        <li>마케터: JD "디지털 광고" → "Google Ads로 캠페인 15개 운영"</li>
                        <li>HR: JD "채용 관리" → "연간 50명 채용 프로세스 주도"</li>
                      </ul>
                    </li>
                    <li><strong>유사 연결:</strong> 비슷한 경험 활용
                      <ul style={{ marginTop: '0.5rem' }}>
                        <li>개발자: JD "대규모 데이터 처리" → "10만 건 데이터 처리로 보고서 작성"</li>
                        <li>마케터: JD "고객 분석" → "고객 설문 500건 분석으로 전략 수립"</li>
                        <li>HR: JD "인재 평가" → "면접 평가 100건으로 채용 성공률 90%"</li>
                      </ul>
                    </li>
                    <li><strong>다른 경험 연결:</strong> 다른 분야 경험을 직무에 맞게
                      <ul style={{ marginTop: '0.5rem' }}>
                        <li>개발자: JD "리더십" → "3명 팀 관리로 프로젝트 성공"</li>
                        <li>마케터: JD "프로젝트 관리" → "캠페인 5개 동시 운영으로 매출 증가"</li>
                        <li>HR: JD "커뮤니케이션" → "부서 간 조율로 채용 프로세스 개선"</li>
                      </ul>
                    </li>
                  </ul>

                  <h4 style={{ color: '#764ba2', marginTop: '1.5rem' }}>3단계: 키워드를 문서에 녹이기</h4>
                  <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li><strong>1줄 소개:</strong> 직무와 핵심 키워드 3-5개
                      <div style={{ background: '#e8f5e9', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0', fontSize: '0.95rem' }}>
                        ✅ 개발자: "3년차 데이터 분석가로 Python과 SQL을 활용한 데이터 시각화 전문"<br/>
                        ✅ 마케터: "4년차 디지털 마케터로 Google Ads와 Analytics를 활용한 캠페인 최적화 전문"<br/>
                        ✅ HR: "5년차 HR 전문가로 채용 프로세스와 인재 평가 전문"
                      </div>
                      <div style={{ background: '#ffebee', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0', fontSize: '0.95rem' }}>
                        ❌ 나쁜 예: "열정적인 직원입니다" (구체성 부족)
                      </div>
                    </li>
                    <li><strong>대표 성과:</strong> JD 키워드와 숫자 결합
                      <div style={{ background: '#e8f5e9', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0', fontSize: '0.95rem' }}>
                        ✅ 개발자: "Python으로 데이터 처리 속도 50% 단축, 연간 1억원 비용 절감"<br/>
                        ✅ 마케터: "Google Ads 캠페인으로 전환율 2%→3.5%, 매출 2억원 증가"<br/>
                        ✅ HR: "ATS 도입으로 채용 시간 30% 단축, 연간 100명 채용 성공"
                      </div>
                    </li>
                    <li><strong>프로젝트 설명:</strong> 키워드를 반복해 강조
                      <ul style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                        <li>개발자: "10만 건 데이터셋 분석, Python과 SQL로 처리 속도 50% 개선"</li>
                        <li>마케터: "월 1000만원 예산 캠페인, Google Analytics로 전환율 20% 향상"</li>
                        <li>HR: "50명 채용 프로젝트, ATS로 후보자 평가 정확도 95% 달성"</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: '#667eea' }}>📋 프로젝트 경험 작성법</h3>
                  <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                    <p style={{ margin: 0, lineHeight: '1.8' }}>
                      <strong>⚠️ 보안 주의:</strong> 회사명, 민감 정보 대신 일반 용어 사용 (예: "전자상거래 플랫폼")
                    </p>
                  </div>
                  
                  <h4 style={{ color: '#764ba2' }}>작성 구조 (개조식)</h4>
                  <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li><strong>전체 성과:</strong> 팀의 결과를 숫자로</li>
                    <li><strong>나의 역할:</strong> 팀 내 포지션과 책임</li>
                    <li><strong>나의 기여:</strong> 내가 한 행동과 결과</li>
                  </ul>

                  <div style={{ background: '#e8f5e9', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                    <strong>좋은 예시:</strong>
                    <ul style={{ marginTop: '0.5rem', marginBottom: 0, paddingLeft: '1.2rem' }}>
                      <li><strong>개발자:</strong>
                        <ul>
                          <li>전체 성과: 결제 성공률 90%→98%, 손실 5천만원→0원</li>
                          <li>나의 역할: 4명 팀에서 데이터 분석 담당</li>
                          <li>나의 기여: Python으로 분석 자동화, 처리 시간 50% 단축</li>
                        </ul>
                      </li>
                      <li><strong>마케터:</strong>
                        <ul>
                          <li>전체 성과: 캠페인으로 신규 고객 1만명 유입, 매출 2억원 증가</li>
                          <li>나의 역할: 3명 팀에서 디지털 광고 담당</li>
                          <li>나의 기여: Google Ads 최적화로 전환율 2%→3.5%</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div style={{ background: '#ffebee', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                    <strong>나쁜 예:</strong> "프로젝트를 성공적으로 완료" (역할, 숫자 없음)
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: '#667eea' }}>✓ 최종 점검 체크리스트</h3>
                  <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
                    <li><strong>JD 연계성:</strong> JD 핵심 키워드가 포함되었는가? 내 경험이 JD와 명확히 연결되었는가?</li>
                    <li><strong>구체성:</strong> 성과에 숫자(%, 금액, 횟수)가 포함되었는가? 팀 규모와 내 역할이 명시되었는가?</li>
                    <li><strong>역할 구분:</strong> 팀 성과와 내 기여가 분리되었는가? "우리가" 대신 "내가"로 명확히 썼는가?</li>
                    <li><strong>표현:</strong> 문장이 간결하고 전문적인가? 오타, 문법 오류가 없는가?</li>
                  </ul>
                </div>

                <button
                  onClick={() => setStep('privacy')}
                  style={{
                    marginTop: '2rem',
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    width: '100%'
                  }}
                >
                  다음 단계로 →
                </button>
              </div>
            )}

            {step === 'privacy' && (
              <div>
                <h2 style={{ color: '#667eea', marginBottom: '1.5rem' }}>🔒 개인정보 보호 안내</h2>
                
                <div style={{ 
                  background: '#e3f2fd', 
                  padding: '1.5rem', 
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  border: '2px solid #2196f3'
                }}>
                  <h3 style={{ color: '#1976d2', marginTop: 0 }}>✅ 개인정보가 저장되지 않습니다</h3>
                  <p style={{ lineHeight: '1.8', margin: '0.5rem 0' }}>
                    이 도구는 <strong>브라우저에서만 작동</strong>하며, 입력하신 모든 정보는 <strong>서버에 전송되거나 저장되지 않습니다</strong>.
                  </p>
                  <p style={{ lineHeight: '1.8', margin: '0.5rem 0' }}>
                    작성하신 내용은 <strong>현재 세션에만 유지</strong>되며, 브라우저를 닫으면 자동으로 삭제됩니다.
                  </p>
                </div>

                <div style={{ 
                  background: '#fff3cd', 
                  padding: '1.5rem', 
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  border: '2px solid #ffc107'
                }}>
                  <h3 style={{ color: '#f57c00', marginTop: 0 }}>💾 작성 내용 저장 방법</h3>
                  <p style={{ lineHeight: '1.8', margin: '0.5rem 0' }}>
                    작성을 완료하신 후, <strong>워드 문서(.doc)로 다운로드</strong>하실 수 있습니다.
                  </p>
                  <p style={{ lineHeight: '1.8', margin: '0.5rem 0' }}>
                    다운로드한 문서를 저장하여 <strong>언제든지 수정하고 활용</strong>하실 수 있습니다.
                  </p>
                </div>

                <div style={{ 
                  background: '#f8f9ff', 
                  padding: '1.5rem', 
                  borderRadius: '8px',
                  marginBottom: '2rem',
                  border: '2px solid #667eea'
                }}>
                  <h3 style={{ color: '#667eea', marginTop: 0 }}>⚠️ 프로젝트 작성 시 주의사항</h3>
                  <ul style={{ lineHeight: '1.8', marginBottom: 0, paddingLeft: '1.5rem' }}>
                    <li><strong>보안(Security):</strong> 회사의 기밀 정보, 고객 데이터, 내부 시스템명 등을 직접 명시하지 마세요</li>
                    <li><strong>컴플라이언스(Compliance):</strong> 법적 제약이나 규정 위반 소지가 있는 내용은 포함하지 마세요</li>
                    <li><strong>일반 용어 사용:</strong> 구체적인 회사명, 프로젝트명 대신 해당 분야의 일반적인 용어로 작성하세요
                      <div style={{ background: '#e8f5e9', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0', fontSize: '0.95rem' }}>
                        예시: "ABC은행 시스템" → "금융권 시스템", "XYZ 프로젝트" → "전자상거래 플랫폼"
                      </div>
                    </li>
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => setStep('guide')}
                    style={{
                      flex: 1,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: '#e0e0e0',
                      color: '#333',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    ← 이전
                  </button>
                  <button
                    onClick={() => setStep('preview')}
                    style={{
                      flex: 2,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    미리보기 →
                  </button>
                </div>
              </div>
            )}

            {step === 'preview' && (
              <div>
                <h2 style={{ color: '#667eea', marginBottom: '1.5rem' }}>📄 경력기술서 미리보기</h2>
                
                <div style={{ 
                  background: '#f8f9fa', 
                  padding: '2rem',
                  borderRadius: '8px',
                  border: '1px solid #dee2e6',
                  marginBottom: '2rem'
                }}>
                  <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #667eea' }}>
                    <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>인적사항</h3>
                    <div style={{ lineHeight: '1.8' }}>
                      <p style={{ margin: '0.5rem 0' }}><strong>이름:</strong> {personalInfo.name}</p>
                      <p style={{ margin: '0.5rem 0' }}><strong>직무:</strong> {personalInfo.position}</p>
                      <p style={{ margin: '0.5rem 0' }}><strong>경력:</strong> {personalInfo.experience}</p>
                      <p style={{ margin: '0.5rem 0' }}><strong>연락처:</strong> {personalInfo.contact}</p>
                      <p style={{ margin: '0.5rem 0' }}><strong>이메일:</strong> {personalInfo.email}</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#764ba2' }}>1줄 소개</h3>
                    <p style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>{personalInfo.summary}</p>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#764ba2' }}>대표 성과</h3>
                    <p style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                      {analysis.keyAchievements || '(작성된 내용이 없습니다)'}
                    </p>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#764ba2' }}>핵심 역량</h3>
                    <p style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                      {analysis.coreCompetencies || '(작성된 내용이 없습니다)'}
                    </p>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#764ba2' }}>프로젝트 경험</h3>
                    {projects.map((project, index) => (
                      <div key={index} style={{ 
                        marginBottom: '2rem',
                        paddingBottom: '2rem',
                        borderBottom: index < projects.length - 1 ? '1px solid #dee2e6' : 'none'
                      }}>
                        <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>{project.name}</h4>
                        <div style={{ marginBottom: '0.5rem', color: '#666' }}>
                          <strong>기간:</strong> {project.period} | <strong>역할:</strong> {project.role}
                        </div>
                        
                        {project.background && (
                          <div style={{ marginBottom: '1rem' }}>
                            <strong>프로젝트 배경:</strong>
                            <p style={{ margin: '0.5rem 0', whiteSpace: 'pre-wrap' }}>{project.background}</p>
                          </div>
                        )}
                        
                        {project.goal && (
                          <div style={{ marginBottom: '1rem' }}>
                            <strong>프로젝트 목표:</strong>
                            <p style={{ margin: '0.5rem 0', whiteSpace: 'pre-wrap' }}>{project.goal}</p>
                          </div>
                        )}
                        
                        <div style={{ marginBottom: '1rem' }}>
                          <strong>자신의 역할 및 수행 내용:</strong>
                          <p style={{ margin: '0.5rem 0', whiteSpace: 'pre-wrap' }}>{project.tasks}</p>
                        </div>
                        
                        <div style={{ marginBottom: '1rem' }}>
                          <strong>성과:</strong>
                          <p style={{ margin: '0.5rem 0', whiteSpace: 'pre-wrap' }}>{project.achievement}</p>
                        </div>
                        
                        {project.insight && (
                          <div>
                            <strong>인사이트 및 강조하고 싶은 부분:</strong>
                            <p style={{ margin: '0.5rem 0', whiteSpace: 'pre-wrap' }}>{project.insight}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={downloadWord}
                  style={{
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    width: '100%',
                    marginBottom: '1rem'
                  }}
                >
                  📥 Word 문서로 다운로드
                </button>

                <button
                  onClick={() => setStep('projects')}
                  style={{
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    background: '#e0e0e0',
                    color: '#333',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    width: '100%'
                  }}
                >
                  ← 수정하기
                </button>
              </div>
            )}
          </div>
        </div>

        <footer style={{
          marginTop: '3rem',
          padding: '2rem',
          textAlign: 'center',
          color: '#666',
          borderTop: '1px solid #dee2e6'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            © 2025 CareerEngineer. All Rights Reserved.
          </p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#999' }}>
            본 도구는 브라우저에서만 작동하며, 입력하신 정보는 서버에 저장되지 않습니다.
          </p>
        </footer>
      </div>
    </div>
  );
}px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    ← 이전
                  </button>
                  <button
                    onClick={() => setStep('personal')}
                    style={{
                      flex: 2,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    동의하고 시작하기 →
                  </button>
                </div>
              </div>
            )}

            {step === 'personal' && (
              <div>
                <h2 style={{ color: '#667eea', marginBottom: '1.5rem' }}>👤 인적사항 입력</h2>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    이름 *
                  </label>
                  <input
                    type="text"
                    value={personalInfo.name}
                    onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                    placeholder="홍길동"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    지원 직무 *
                  </label>
                  <input
                    type="text"
                    value={personalInfo.position}
                    onChange={(e) => setPersonalInfo({...personalInfo, position: e.target.value})}
                    placeholder="예: 데이터 분석가, 백엔드 개발자, 디지털 마케터"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    경력 *
                  </label>
                  <input
                    type="text"
                    value={personalInfo.experience}
                    onChange={(e) => setPersonalInfo({...personalInfo, experience: e.target.value})}
                    placeholder="예: 3년, 신입, 5년 6개월"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    연락처 *
                  </label>
                  <input
                    type="text"
                    value={personalInfo.contact}
                    onChange={(e) => setPersonalInfo({...personalInfo, contact: e.target.value})}
                    placeholder="010-1234-5678"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    이메일 *
                  </label>
                  <input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    placeholder="example@email.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    1줄 소개 *
                  </label>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', marginTop: 0 }}>
                    직무와 핵심 키워드 3-5개를 포함하여 작성하세요
                  </p>
                  <textarea
                    value={personalInfo.summary}
                    onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                    placeholder="예: 3년차 데이터 분석가로 Python과 SQL을 활용한 데이터 시각화 전문"
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => setStep('privacy')}
                    style={{
                      flex: 1,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: '#e0e0e0',
                      color: '#333',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    ← 이전
                  </button>
                  <button
                    onClick={() => setStep('jd')}
                    style={{
                      flex: 2,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    다음 단계로 →
                  </button>
                </div>
              </div>
            )}

            {step === 'jd' && (
              <div>
                <h2 style={{ color: '#667eea', marginBottom: '1.5rem' }}>📄 직무 공고(JD) 입력</h2>
                
                <div style={{ 
                  background: '#fff9e6', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  border: '1px solid #ffd700'
                }}>
                  <strong>💡 Tip:</strong> 지원하려는 직무의 공고문을 복사해서 붙여넣으세요. 
                  AI가 핵심 키워드를 분석해 경력기술서 작성을 도와드립니다.
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    직무 공고 전문 (선택사항)
                  </label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="지원하려는 직무의 공고문을 여기에 붙여넣으세요.&#10;&#10;예:&#10;[필수 요건]&#10;- Python을 활용한 데이터 분석 경험 3년 이상&#10;- SQL 쿼리 작성 및 데이터베이스 관리 경험&#10;- 통계 분석 및 머신러닝 기초 지식&#10;&#10;[우대 사항]&#10;- Power BI, Tableau 등 시각화 도구 경험&#10;- AWS, GCP 등 클라우드 환경 경험"
                    rows={12}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => setStep('personal')}
                    style={{
                      flex: 1,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: '#e0e0e0',
                      color: '#333',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    ← 이전
                  </button>
                  <button
                    onClick={analyzeJD}
                    style={{
                      flex: 2,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    JD 분석하기 →
                  </button>
                </div>
              </div>
            )}

            {step === 'analysis' && (
              <div>
                <h2 style={{ color: '#667eea', marginBottom: '1.5rem' }}>🔍 JD 분석 결과 및 핵심 역량 작성</h2>
                
                {analysis.keywords.length > 0 && (
                  <div style={{ 
                    background: '#e8f5e9', 
                    padding: '1.5rem', 
                    borderRadius: '8px',
                    marginBottom: '2rem',
                    border: '1px solid #4caf50'
                  }}>
                    <h3 style={{ color: '#2e7d32', marginTop: 0 }}>📌 추출된 핵심 키워드</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {analysis.keywords.map((keyword, index) => (
                        <span key={index} style={{
                          background: '#4caf50',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: 'bold'
                        }}>
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ 
                  background: '#fff9e6', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  marginBottom: '2rem',
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.8'
                }}>
                  {analysis.suggestions}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    대표 성과 *
                  </label>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', marginTop: 0 }}>
                    JD 키워드와 숫자를 결합하여 작성하세요
                  </p>
                  <textarea
                    value={analysis.keyAchievements}
                    onChange={(e) => setAnalysis({...analysis, keyAchievements: e.target.value})}
                    placeholder="예: Python으로 데이터 처리 속도 50% 단축, 연간 1억원 비용 절감"
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    핵심 역량 *
                  </label>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', marginTop: 0 }}>
                    JD에서 요구하는 기술과 경험을 중심으로 작성하세요
                  </p>
                  <textarea
                    value={analysis.coreCompetencies}
                    onChange={(e) => setAnalysis({...analysis, coreCompetencies: e.target.value})}
                    placeholder="예:&#10;• 데이터 분석: Python, SQL, Pandas를 활용한 대규모 데이터 처리 및 분석&#10;• 시각화: Power BI, Tableau로 인사이트 도출 및 대시보드 구축&#10;• 협업: 마케팅, 개발 팀과의 긴밀한 협업으로 데이터 기반 의사결정 지원"
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => setStep('jd')}
                    style={{
                      flex: 1,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: '#e0e0e0',
                      color: '#333',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    ← 이전
                  </button>
                  <button
                    onClick={() => setStep('projects')}
                    style={{
                      flex: 2,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    다음 단계로 →
                  </button>
                </div>
              </div>
            )}

            {step === 'projects' && (
              <div>
                <h2 style={{ color: '#667eea', marginBottom: '1.5rem' }}>📂 프로젝트 경험 작성</h2>
                
                <div style={{ 
                  background: '#fff3cd', 
                  padding: '1.5rem', 
                  borderRadius: '8px',
                  marginBottom: '2rem',
                  border: '2px solid #ffc107'
                }}>
                  <h3 style={{ color: '#f57c00', marginTop: 0 }}>⚠️ 프로젝트 작성 시 주의사항</h3>
                  <ul style={{ lineHeight: '1.8', marginBottom: 0, paddingLeft: '1.5rem' }}>
                    <li><strong>보안(Security)과 컴플라이언스(Compliance)를 준수하세요</strong></li>
                    <li>회사의 기밀 정보, 고객 데이터, 내부 시스템명을 직접 명시하지 마세요</li>
                    <li>해당 분야의 <strong>일반적인 용어</strong>로 작성하세요</li>
                    <li style={{ background: '#e8f5e9', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0', listStyle: 'none' }}>
                      예시: "ABC은행 시스템" → "금융권 시스템", "XYZ 프로젝트" → "전자상거래 플랫폼"
                    </li>
                  </ul>
                </div>

                {projects.map((project, index) => (
                  <div key={index} style={{ 
                    marginBottom: '2rem', 
                    padding: '1.5rem', 
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #dee2e6'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <h3 style={{ color: '#764ba2', margin: 0 }}>프로젝트 #{index + 1}</h3>
                      {projects.length > 1 && (
                        <button
                          onClick={() => removeProject(index)}
                          style={{
                            padding: '0.5rem 1rem',
                            background: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          삭제
                        </button>
                      )}
                    </div>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        프로젝트명 *
                      </label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => updateProject(index, 'name', e.target.value)}
                        placeholder="예: 전자상거래 플랫폼 결제 시스템 개선"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          fontSize: '1rem',
                          border: '1px solid #ced4da',
                          borderRadius: '4px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                          기간 *
                        </label>
                        <input
                          type="text"
                          value={project.period}
                          onChange={(e) => updateProject(index, 'period', e.target.value)}
                          placeholder="예: 2023.01~2023.06 (6개월)"
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            fontSize: '1rem',
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                          역할 *
                        </label>
                        <input
                          type="text"
                          value={project.role}
                          onChange={(e) => updateProject(index, 'role', e.target.value)}
                          placeholder="예: 5명 팀에서 백엔드 개발 담당"
                          style={{
                            width: '100%',
                            padding: '0.75rem',
                            fontSize: '1rem',
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        프로젝트 배경
                      </label>
                      <textarea
                        value={project.background}
                        onChange={(e) => updateProject(index, 'background', e.target.value)}
                        placeholder="예: 월 매출 10억원 플랫폼에서 결제 실패율 15%로 인한 고객 불만과 매출 손실 발생"
                        rows={3}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          fontSize: '1rem',
                          border: '1px solid #ced4da',
                          borderRadius: '4px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        프로젝트 목표
                      </label>
                      <textarea
                        value={project.goal}
                        onChange={(e) => updateProject(index, 'goal', e.target.value)}
                        placeholder="예: 결제 실패율 5% 이하로 감소, 월평균 손실액 5천만원 절감"
                        rows={2}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          fontSize: '1rem',
                          border: '1px solid #ced4da',
                          borderRadius: '4px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        자신의 역할 및 수행 내용 *
                      </label>
                      <textarea
                        value={project.tasks}
                        onChange={(e) => updateProject(index, 'tasks', e.target.value)}
                        placeholder="예: Python으로 결제 실패 로그 분석, 타임아웃 설정 최적화, 재시도 로직 구현, 모니터링 대시보드 구축"
                        rows={4}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          fontSize: '1rem',
                          border: '1px solid #ced4da',
                          borderRadius: '4px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        성과 *
                      </label>
                      <textarea
                        value={project.achievement}
                        onChange={(e) => updateProject(index, 'achievement', e.target.value)}
                        placeholder="전체 성과와 나의 기여를 구분해서 작성하세요.&#10;예:&#10;- 전체: 결제 실패율 15%→3%, 월 손실액 5천만원→0원, 고객 만족도 15% 향상&#10;- 나의 역할: 실패 원인 분석 및 개선 방안 설계 주도&#10;- 나의 기여: 타임아웃 최적화로 실패율 80% 감소, 처리 시간 2초 단축"
                        rows={5}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          fontSize: '1rem',
                          border: '1px solid #ced4da',
                          borderRadius: '4px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        인사이트 및 강조하고 싶은 부분
                      </label>
                      <textarea
                        value={project.insight}
                        onChange={(e) => updateProject(index, 'insight', e.target.value)}
                        placeholder="예: 이 프로젝트를 통해 데이터 기반 의사결정의 중요성을 배웠으며, 실시간 모니터링 시스템 구축 경험을 쌓았습니다."
                        rows={3}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          fontSize: '1rem',
                          border: '1px solid #ced4da',
                          borderRadius: '4px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                          resize: 'vertical'
                        }}
                      />
                    </div>
                  </div>
                ))}

                <button
                  onClick={addProject}
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    background: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '2rem',
                    width: '100%'
                  }}
                >
                  + 프로젝트 추가
                </button>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => setStep('analysis')}
                    style={{
                      flex: 1,
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      background: '#e0e0e0',
                      color: '#333',
                      border: 'none',
                      borderRadius: '8