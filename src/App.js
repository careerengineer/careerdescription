import React, { useState } from 'react';
import { Download, FileText, User, Award, ChevronRight, HelpCircle, Lock } from 'lucide-react';

function CareerStatementGenerator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  
  const SECRET_PASSWORD = 'CareerEngineer!';

  const handleLogin = () => {
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      birth: '',
      phone: '',
      email: '',
      address: ''
    },
    position: '',
    years: '',
    education: [{ school: '', major: '', degree: '', period: '', status: '' }],
    oneLineIntro: '',
    competency1: '',
    competency2: '',
    competency3: '',
    majorProject: '',
    techStack: '',
    careers: [{ company: '', department: '', position: '', period: '', isCurrentJob: false, role: '' }],
    toolSkills: [{ tools: '', proficiency: '' }],
    languageSkills: [{ languages: '', proficiency: '' }],
    certifications: [{ name: '', issuer: '', date: '' }],
    additionalStrength: '',
    publications: [{ title: '', journal: '', date: '', author: '' }],
    projects: [{ 
      company: '', 
      name: '', 
      period: '', 
      background: '', 
      goals: '', 
      roleAndTasks: '', 
      achievement: '', 
      insights: '' 
    }]
  });

  const updatePersonalInfo = (field, value) => {
    setFormData({ 
      ...formData, 
      personalInfo: { ...formData.personalInfo, [field]: value } 
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', major: '', degree: '', period: '', status: '' }]
    });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const updateEducation = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData({ ...formData, education: newEducation });
  };

  const addCareer = () => {
    setFormData({
      ...formData,
      careers: [...formData.careers, { company: '', department: '', position: '', period: '', isCurrentJob: false, role: '' }]
    });
  };

  const removeCareer = (index) => {
    const newCareers = formData.careers.filter((_, i) => i !== index);
    setFormData({ ...formData, careers: newCareers });
  };

  const updateCareer = (index, field, value) => {
    const newCareers = [...formData.careers];
    newCareers[index][field] = value;
    setFormData({ ...formData, careers: newCareers });
  };

  const addToolSkill = () => {
    setFormData({
      ...formData,
      toolSkills: [...formData.toolSkills, { tools: '', proficiency: '' }]
    });
  };

  const removeToolSkill = (index) => {
    const newSkills = formData.toolSkills.filter((_, i) => i !== index);
    setFormData({ ...formData, toolSkills: newSkills });
  };

  const updateToolSkill = (index, field, value) => {
    const newSkills = [...formData.toolSkills];
    newSkills[index][field] = value;
    setFormData({ ...formData, toolSkills: newSkills });
  };

  const addLanguageSkill = () => {
    setFormData({
      ...formData,
      languageSkills: [...formData.languageSkills, { languages: '', proficiency: '' }]
    });
  };

  const removeLanguageSkill = (index) => {
    const newSkills = formData.languageSkills.filter((_, i) => i !== index);
    setFormData({ ...formData, languageSkills: newSkills });
  };

  const updateLanguageSkill = (index, field, value) => {
    const newSkills = [...formData.languageSkills];
    newSkills[index][field] = value;
    setFormData({ ...formData, languageSkills: newSkills });
  };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { name: '', issuer: '', date: '' }]
    });
  };

  const removeCertification = (index) => {
    const newCerts = formData.certifications.filter((_, i) => i !== index);
    setFormData({ ...formData, certifications: newCerts });
  };

  const updateCertification = (index, field, value) => {
    const newCerts = [...formData.certifications];
    newCerts[index][field] = value;
    setFormData({ ...formData, certifications: newCerts });
  };

  const addPublication = () => {
    setFormData({
      ...formData,
      publications: [...formData.publications, { title: '', journal: '', date: '', author: '' }]
    });
  };

  const removePublication = (index) => {
    const newPubs = formData.publications.filter((_, i) => i !== index);
    setFormData({ ...formData, publications: newPubs });
  };

  const updatePublication = (index, field, value) => {
    const newPubs = [...formData.publications];
    newPubs[index][field] = value;
    setFormData({ ...formData, publications: newPubs });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { 
        company: '', 
        name: '', 
        period: '', 
        background: '', 
        goals: '', 
        roleAndTasks: '', 
        achievement: '', 
        insights: '' 
      }]
    });
  };

  const removeProject = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
  };

  const updateProject = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const generateWordDocument = () => {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Malgun Gothic,sans-serif;line-height:1.8;padding:40px}h1{text-align:center;border-bottom:2px solid #000;padding-bottom:10px;margin-bottom:30px}h2{margin-top:30px;margin-bottom:15px;border-bottom:1px solid #000;padding-bottom:5px}h3{margin-top:20px;margin-bottom:10px;font-weight:bold}.info-table{width:100%;border-collapse:collapse;margin:20px 0}.info-table td{padding:8px;border:1px solid #000}.info-table td:first-child{font-weight:bold;width:120px}p{margin:10px 0}.footer{margin-top:50px;padding-top:20px;border-top:1px solid #ccc;text-align:center;font-size:12px;color:#666}</style></head><body>';
    
    html += '<h1>CareerEngineer 경력기술서</h1>';
    html += '<h2>인적사항</h2><table class="info-table">';
    html += '<tr><td>성명</td><td>' + formData.personalInfo.name + '</td></tr>';
    html += '<tr><td>생년월일</td><td>' + formData.personalInfo.birth + '</td></tr>';
    html += '<tr><td>연락처</td><td>' + formData.personalInfo.phone + '</td></tr>';
    html += '<tr><td>이메일</td><td>' + formData.personalInfo.email + '</td></tr>';
    html += '<tr><td>주소</td><td>' + formData.personalInfo.address + '</td></tr>';
    html += '<tr><td>지원 직무</td><td>' + formData.position + '</td></tr>';
    html += '<tr><td>총 경력</td><td>' + formData.years + '년</td></tr>';
    html += '</table>';
    
    html += '<h2>학력사항</h2>';
    formData.education.forEach(edu => {
      html += '<p><strong>' + edu.school + '</strong> | ' + edu.major + ' | ' + edu.degree + ' | ' + edu.period + ' | ' + edu.status + '</p>';
    });
    
    html += '<h2>핵심역량</h2>';
    html += '<h3>1줄 포지셔닝</h3><p>' + formData.oneLineIntro.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>핵심역량</h3>';
    html += '<p><strong>역량 1:</strong><br>' + formData.competency1.replace(/\n/g, '<br>') + '</p>';
    html += '<p><strong>역량 2:</strong><br>' + formData.competency2.replace(/\n/g, '<br>') + '</p>';
    html += '<p><strong>역량 3:</strong><br>' + formData.competency3.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>대표 성과</h3><p>' + formData.majorProject.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>핵심 기술 스택</h3><p>' + formData.techStack.replace(/\n/g, '<br>') + '</p>';
    
    html += '<h2>경력사항</h2>';
    formData.careers.forEach(career => {
      html += '<div><p><strong>' + career.company + '</strong> | ' + career.department + ' | ' + career.position;
      if (career.isCurrentJob) html += ' (재직중)';
      html += '</p><p>' + career.period + '</p>';
      html += '<p><strong>역할:</strong> ' + career.role.replace(/\n/g, '<br>') + '</p></div>';
    });
    
    html += '<h3>사용 가능 툴</h3>';
    formData.toolSkills.forEach(skill => {
      html += '<p>' + skill.tools + ' | 숙련도: ' + skill.proficiency + '</p>';
    });
    
    html += '<h3>사용 가능 언어</h3>';
    formData.languageSkills.forEach(skill => {
      html += '<p>' + skill.languages + ' | 숙련도: ' + skill.proficiency + '</p>';
    });
    
    html += '<h3>자격증</h3>';
    formData.certifications.forEach(cert => {
      html += '<p><strong>' + cert.name + '</strong> | ' + cert.issuer + ' | ' + cert.date + '</p>';
    });
    
    html += '<h3>추가 강점</h3><p>' + formData.additionalStrength.replace(/\n/g, '<br>') + '</p>';
    
    html += '<h3>작성 논문</h3>';
    formData.publications.forEach(pub => {
      html += '<p><strong>' + pub.title + '</strong><br>' + pub.journal + ' | ' + pub.date + ' | ' + pub.author + '</p>';
    });
    
    html += '<h2>주요 프로젝트</h2>';
    formData.projects.forEach((project, index) => {
      html += '<div style="margin:25px 0"><h3>프로젝트 ' + (index + 1) + ': ' + project.name + '</h3>';
      html += '<p><strong>회사:</strong> ' + project.company + ' | <strong>기간:</strong> ' + project.period + '</p>';
      html += '<p><strong>프로젝트 배경:</strong><br>' + project.background.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>프로젝트 목표:</strong><br>' + project.goals.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>자신의 역할 및 수행 내용:</strong><br>' + project.roleAndTasks.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>성과:</strong><br>' + project.achievement.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>인사이트 및 강조하고 싶은 부분:</strong><br>' + project.insights.replace(/\n/g, '<br>') + '</p>';
      html += '</div>';
    });
    
    html += '<div class="footer">';
    html += '<p style="font-weight:bold">© 2025 CareerEngineer. All Rights Reserved.</p>';
    html += '<p>이 문서는 저작권법에 의해 보호받는 저작물입니다.</p>';
    html += '<p>문서의 전체 또는 일부를 저작권자의 사전 서면 동의 없이 무단으로 복제, 배포, 전송, 전시, 방송하거나 수정 및 편집하는 행위는 금지되어 있으며,<br/>위반 시 관련 법령에 따라 법적인 책임을 질 수 있습니다.</p>';
    html += '<p>오직 개인적인 용도로만 사용해야 하며, 상업적 목적의 사용 및 무단 배포를 엄격히 금지합니다.</p>';
    html += '</div>';
    html += '</body></html>';
    
    const blob = new Blob([html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '경력기술서_' + formData.personalInfo.name + '.doc';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Lock className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">비공개 페이지</h1>
            <p className="text-gray-600">CareerEngineer의 경력기술서 작성 가이드&템플릿</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">비밀번호를 입력하세요</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                placeholder="비밀번호 입력"
                autoFocus
              />
            </div>
            {showError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                비밀번호가 올바르지 않습니다.
              </div>
            )}
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              접속하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">CareerEngineer의 경력기술서 작성 가이드&템플릿</h1>
          </div>

           <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs font-bold text-gray-700 mb-2">© 2025 CareerEngineer. All Rights Reserved.</p>
              <p className="text-xs text-gray-500 mb-1">이 문서는 저작권법에 의해 보호받는 저작물입니다.</p>
              <p className="text-xs text-red-500 mb-1">문서의 전체 또는 일부를 저작권자의 사전 서면 동의 없이 무단으로 복제, 배포, 전송, 전시, 방송하거나</p>
              <p className="text-xs text-red-500 mb-1">수정 및 편집하는 행위는 금지되어 있으며, 위반 시 관련 법령에 따라 법적인 책임을 질 수 있습니다.</p>
              <p className="text-xs text-gray-500">오직 개인적인 용도로만 사용해야 하며, 상업적 목적의 사용 및 무단 배포를 엄격히 금지합니다.</p>
            </ul>
            </div>



          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-sm font-semibold text-gray-800 mb-2">작성 핵심 원칙</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>직무 공고와 연결:</strong> 지원 직무의 요구사항에 맞춰 경험을 강조하세요</li>
              <li>• <strong>최신순 정렬:</strong> 최근 경력과 프로젝트를 먼저 작성하세요</li>
              <li>• <strong>구체적으로:</strong> 역할과 성과를 숫자로 표현하세요 (예: "매출 10% 증가")</li>
              <li>• <strong>역할 구분:</strong> 팀 성과와 나의 기여를 명확히 나눠 작성하세요</li>
              <li>• <strong>간결하게:</strong> 1-2페이지, 핵심만 전달하세요</li>
            </ul>
          </div>
        </div>

        {/* JD 분석 가이드 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            직무 공고(JD) 기반 작성법
          </h2>
          
          <div className="bg-white p-4 md:p-6 rounded-lg mb-4">
            <h3 className="text-lg font-bold text-indigo-600 mb-3">📋 JD 분석 및 키워드 찾기</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>1단계:</strong> 지원 직무 JD의 핵심 요구사항 파악</p>
              <p><strong>2단계:</strong> JD 요구사항과 매칭되는 본인의 경험/프로젝트 선별</p>
              <p><strong>3단계:</strong> 선별한 경험을 구체적 숫자와 기간으로 표현</p>
              <div className="mt-3 p-3 bg-blue-50 rounded">
                <p className="text-blue-700 font-semibold">💡 예시:</p>
                <p className="text-sm">개발자 JD: "Python으로 데이터 분석 2년 이상" → "Python으로 고객 데이터 분석 3년"</p>
                <p className="text-sm">마케터 JD: "디지털 광고 캠페인 운영" → "Google Ads로 캠페인 15개 운영"</p>
                <p className="text-sm">HR JD: "채용 프로세스 관리" → "연간 50명 채용 프로세스 주도"</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">✅ 좋은 표현 (구체적)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 개발자: "Python과 SQL로 데이터 분석 3년"</li>
                  <li>• 마케터: "Google Ads와 Analytics를 활용한 캠페인 최적화"</li>
                  <li>• HR: "ATS 도입으로 채용 시간 30% 단축"</li>
                  <li>• 교육자: "100명 규모 워크숍 10회 운영"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-3">❌ 나쁜 표현 (애매함)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• "열정적인 직원입니다"</li>
                  <li>• "프로젝트를 성공적으로 완료"</li>
                  <li>• "시스템 성능 개선"</li>
                  <li>• "좋은 성과를 냈습니다"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 프로젝트 시작 전 안내 */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-blue-800 mb-4">📌 프로젝트 작성 시 중요 안내사항</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <p><strong>개인정보 보호:</strong> 귀하가 작성하신 모든 내용은 브라우저에서만 처리되며, 외부 서버에 저장되지 않습니다.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <p><strong>다운로드 기능:</strong> 작성 완료 후 워드 문서로 다운로드하여 활용하실 수 있습니다.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <p><strong>보안 준수:</strong> 프로젝트 작성 시 보안유지가 필요한 회사명, 민감 정보에 대해서는 해당 분야의 일반적인 용어로 작성하세요.<br/>
              예: "전자상거래 플랫폼", "금융 서비스 기업", "글로벌 IT 기업" 등</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <p><strong>Compliance 준수:</strong> 기밀유지 의무에 위배되지 않도록 구체적인 수치나 고객사 정보는 범위로 표현하세요.<br/>
              예: "MAU 100만 이상", "연매출 1000억 규모", "Fortune 500 기업" 등</p>
            </div>
          </div>
        </div>

        {/* 인적사항 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">인적사항</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">성명</label>
              <input type="text" value={formData.personalInfo.name} onChange={(e) => updatePersonalInfo('name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">생년월일</label>
              <input type="text" value={formData.personalInfo.birth} onChange={(e) => updatePersonalInfo('birth', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 1990.01.01" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">연락처</label>
              <input type="text" value={formData.personalInfo.phone} onChange={(e) => updatePersonalInfo('phone', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 010-0000-0000" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">이메일</label>
              <input type="email" value={formData.personalInfo.email} onChange={(e) => updatePersonalInfo('email', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: example@email.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">주소</label>
              <input type="text" value={formData.personalInfo.address} onChange={(e) => updatePersonalInfo('address', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 서울특별시 강남구" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">지원 직무</label>
              <input type="text" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 백엔드 개발자, 디지털 마케터, HR 매니저" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">총 경력 (년)</label>
              <input type="number" value={formData.years} onChange={(e) => setFormData({...formData, years: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 5" />
            </div>
          </div>
        </div>

        {/* 학력사항 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">학력사항</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">학력 {index + 1}</h3>
                {formData.education.length > 1 && (
                  <button onClick={() => removeEducation(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">학교명</label>
                  <input type="text" value={edu.school} onChange={(e) => updateEducation(index, 'school', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: OO대학교" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">전공</label>
                  <input type="text" value={edu.major} onChange={(e) => updateEducation(index, 'major', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 컴퓨터공학과" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">학위</label>
                  <input type="text" value={edu.degree} onChange={(e) => updateEducation(index, 'degree', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 학사, 석사, 박사" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">재학 기간</label>
                  <input type="text" value={edu.period} onChange={(e) => updateEducation(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 2020.03 - 2024.02" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">졸업 상태</label>
                  <select value={edu.status} onChange={(e) => updateEducation(index, 'status', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option value="">선택</option>
                    <option value="졸업">졸업</option>
                    <option value="재학">재학</option>
                    <option value="수료">수료</option>
                    <option value="중퇴">중퇴</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addEducation} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 학력 추가</button>
        </div>

        {/* 핵심역량 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">핵심역량 (JD 기반 작성)</h2>
          </div>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-blue-800 mb-2">✅ JD 매칭 작성법</p>
            <div className="text-sm text-gray-700 space-y-2">
              <p>1. 지원 직무 JD의 핵심 요구사항 파악</p>
              <p>2. JD 요구사항과 매칭되는 본인의 경험/프로젝트 선별</p>
              <p>3. 선별한 경험을 구체적 숫자와 기간으로 표현</p>
              <p className="text-blue-700 font-semibold mt-2">💡 예시: JD에 "MSA 전환 경험" 요구 → "3년간 레거시 시스템 MSA 전환 3건 리드"</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">1줄 포지셔닝 (JD 핵심 키워드 포함)</label>
              <textarea value={formData.oneLineIntro} onChange={(e) => setFormData({...formData, oneLineIntro: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={2} placeholder="예시:&#10;• 개발자: 3년차 데이터 분석가로 Python과 SQL을 활용한 데이터 시각화 전문&#10;• 마케터: 4년차 디지털 마케터로 Google Ads와 Analytics를 활용한 캠페인 최적화 전문&#10;• HR: 5년차 HR 전문가로 채용 프로세스와 인재 평가 전문" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 1 (JD 필수 요구사항과 매칭)</label>
              <textarea value={formData.competency1} onChange={(e) => setFormData({...formData, competency1: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시:&#10;• 개발자: Python, SQL로 데이터 분석 3년 | 10만 건 데이터 처리 자동화&#10;• 마케터: 디지털 광고 캠페인 4년 | Google Ads로 전환율 2%→3.5% 향상&#10;• HR: 채용 프로세스 관리 5년 | 연간 100명 채용, 성공률 95%" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 2 (JD 우대 요구사항과 매칭)</label>
              <textarea value={formData.competency2} onChange={(e) => setFormData({...formData, competency2: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시:&#10;• 개발자: Power BI 시각화 | 대시보드 20개 구축으로 의사결정 속도 50% 향상&#10;• 마케터: SEO 최적화 | 자연 검색 트래픽 300% 증가, 월 방문자 10만명 달성&#10;• HR: ATS 시스템 운영 | Workday로 채용 프로세스 자동화, 시간 30% 단축" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 3 (추가 차별화 역량)</label>
              <textarea value={formData.competency3} onChange={(e) => setFormData({...formData, competency3: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시:&#10;• 개발자: 팀 협업 | 5명 팀 리드로 애자일 스프린트 20회 운영&#10;• 마케터: 데이터 분석 | SQL로 고객 세그먼트 분석, 타겟팅 정확도 85%&#10;• HR: 조직문화 개선 | 직원 만족도 조사 설계, 만족도 70%→85% 향상" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">대표 성과 (가장 임팩트 있는 성과)</label>
              <textarea value={formData.majorProject} onChange={(e) => setFormData({...formData, majorProject: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시:&#10;• 개발자: Python 자동화로 처리 시간 50% 단축, 연간 1억원 비용 절감&#10;• 마케터: Google Ads 캠페인으로 전환율 2%→3.5%, 매출 2억원 증가&#10;• HR: ATS 도입으로 채용 시간 30% 단축, 연간 100명 채용 성공" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심 기술 스택 (JD 요구 기술 우선 배치)</label>
              <textarea value={formData.techStack} onChange={(e) => setFormData({...formData, techStack: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시:&#10;• 개발자: Python, SQL, Power BI, Excel, Tableau, AWS, Git&#10;• 마케터: Google Ads, Analytics, Facebook Ads, SEO, SQL, Excel&#10;• HR: Workday, SAP, Excel, PowerPoint, Teams, Slack" />
            </div>
          </div>
        </div>

        {/* 경력사항 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">경력사항 (최신순)</h2>
          {formData.careers.map((career, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">경력 {index + 1}</h3>
                {formData.careers.length > 1 && (
                  <button onClick={() => removeCareer(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">회사명</label>
                  <input type="text" value={career.company} onChange={(e) => updateCareer(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: ABC솔루션" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">부서</label>
                  <input type="text" value={career.department} onChange={(e) => updateCareer(index, 'department', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 개발팀, 마케팅팀" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">직책</label>
                  <input type="text" value={career.position} onChange={(e) => updateCareer(index, 'position', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 선임 개발자, 마케팅 매니저" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">재직 기간</label>
                  <input type="text" value={career.period} onChange={(e) => updateCareer(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 2020.01 - 2023.12" />
                </div>
                <div className="md:col-span-2 flex items-center gap-2">
                  <input type="checkbox" checked={career.isCurrentJob} onChange={(e) => updateCareer(index, 'isCurrentJob', e.target.checked)} className="w-4 h-4 text-indigo-600 rounded" />
                  <label className="text-sm text-gray-700">현재 재직중</label>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">주요 역할 및 성과</label>
                  <textarea value={career.role} onChange={(e) => updateCareer(index, 'role', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 데이터 분석 시스템 개발 및 운영&#10;• Python으로 일 10만건 데이터 처리 자동화&#10;• 처리 시간 5시간→1시간 단축 (80% 개선)&#10;• 3명 팀에서 데이터 파이프라인 설계 담당" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addCareer} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 경력 추가</button>
        </div>

        {/* 스킬 및 자격 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">스킬 및 자격</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">사용 가능 툴</h3>
            {formData.toolSkills.map((skill, index) => (
              <div key={index} className="mb-4 flex gap-4">
                <input type="text" value={skill.tools} onChange={(e) => updateToolSkill(index, 'tools', e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: Excel, PowerPoint, Figma, Jira" />
                <select value={skill.proficiency} onChange={(e) => updateToolSkill(index, 'proficiency', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option value="">숙련도</option>
                  <option value="상">상</option>
                  <option value="중">중</option>
                  <option value="하">하</option>
                </select>
                {formData.toolSkills.length > 1 && (
                  <button onClick={() => removeToolSkill(index)} className="text-red-600 hover:text-red-800">삭제</button>
                )}
              </div>
            ))}
            <button onClick={addToolSkill} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 툴 추가</button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">사용 가능 언어</h3>
            {formData.languageSkills.map((skill, index) => (
              <div key={index} className="mb-4 flex gap-4">
                <input type="text" value={skill.languages} onChange={(e) => updateLanguageSkill(index, 'languages', e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: Python, JavaScript, SQL" />
                <select value={skill.proficiency} onChange={(e) => updateLanguageSkill(index, 'proficiency', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option value="">숙련도</option>
                  <option value="상">상</option>
                  <option value="중">중</option>
                  <option value="하">하</option>
                </select>
                {formData.languageSkills.length > 1 && (
                  <button onClick={() => removeLanguageSkill(index)} className="text-red-600 hover:text-red-800">삭제</button>
                )}
              </div>
            ))}
            <button onClick={addLanguageSkill} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 언어 추가</button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">자격증</h3>
            {formData.certifications.map((cert, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-gray-700">자격증 {index + 1}</h4>
                  {formData.certifications.length > 1 && (
                    <button onClick={() => removeCertification(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" value={cert.name} onChange={(e) => updateCertification(index, 'name', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="자격증명" />
                  <input type="text" value={cert.issuer} onChange={(e) => updateCertification(index, 'issuer', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="발급기관" />
                  <input type="text" value={cert.date} onChange={(e) => updateCertification(index, 'date', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="취득일 (예: 2023.01)" />
                </div>
              </div>
            ))}
            <button onClick={addCertification} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 자격증 추가</button>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">추가 강점</label>
            <textarea value={formData.additionalStrength} onChange={(e) => setFormData({...formData, additionalStrength: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 영어 비즈니스 회화 가능, 해외 프로젝트 경험, 스타트업 근무 경험" />
          </div>
        </div>

        {/* 작성 논문 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">작성 논문</h2>
          {formData.publications.map((pub, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">논문 {index + 1}</h3>
                {formData.publications.length > 1 && (
                  <button onClick={() => removePublication(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">논문 제목</label>
                  <input type="text" value={pub.title} onChange={(e) => updatePublication(index, 'title', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" value={pub.journal} onChange={(e) => updatePublication(index, 'journal', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="게재 저널/학회" />
                  <input type="text" value={pub.date} onChange={(e) => updatePublication(index, 'date', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="발표일 (예: 2023.06)" />
                  <input type="text" value={pub.author} onChange={(e) => updatePublication(index, 'author', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="저자 구분 (예: 제1저자)" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addPublication} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 논문 추가</button>
        </div>

        {/* 주요 프로젝트 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">주요 프로젝트 (최신순)</h2>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-blue-800 mb-2">✅ 프로젝트 작성 가이드</p>
            <div className="text-sm text-gray-700 space-y-3">
              <div>
                <p className="font-semibold text-gray-800 mb-1">📌 성과 작성 3단계:</p>
                <p><strong>1단계:</strong> 프로젝트 전체 성과 먼저 기술</p>
                <p><strong>2단계:</strong> 본인의 구체적 담당 업무와 역할 명시</p>
                <p><strong>3단계:</strong> 본인 담당 영역에서의 성과 수치 제시</p>
              </div>
              
              <div className="mt-3 p-3 bg-green-50 rounded">
                <p className="font-semibold text-green-800 mb-2">✅ 좋은 예시</p>
                <p className="text-gray-700 text-sm">
                  "프로젝트 전체: 결제 성공률 90%→98%, 손실 5천만원→0원<br/>
                  나의 역할: 4명 팀에서 데이터 분석 담당<br/>
                  나의 기여: Python으로 분석 자동화, 처리 시간 50% 단축"
                </p>
              </div>
            </div>
          </div>
          
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">프로젝트 {index + 1}</h3>
                {formData.projects.length > 1 && (
                  <button onClick={() => removeProject(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                )}
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">회사/조직</label>
                    <input type="text" value={project.company} onChange={(e) => updateProject(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: ABC 솔루션" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트명</label>
                    <input type="text" value={project.name} onChange={(e) => updateProject(index, 'name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 결제 시스템 성능 개선" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">수행 기간</label>
                    <input type="text" value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 2023.01 - 2023.06 (6개월)" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트 배경</label>
                  <textarea value={project.background} onChange={(e) => updateProject(index, 'background', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시:&#10;• 개발자: 월 매출 10억원 플랫폼, 데이터 처리 지연으로 보고 지체&#10;• 마케터: 신규 고객 유입 저조로 월 매출 5억원 정체&#10;• HR: 수동 채용으로 평가 시간 2주, 성공률 80%" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트 목표</label>
                  <textarea value={project.goals} onChange={(e) => updateProject(index, 'goals', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시:&#10;• 개발자: 처리 시간 50% 단축, 보고서 정확도 95% 이상&#10;• 마케터: 신규 고객 1만명 유입, 전환율 3% 이상&#10;• HR: 채용 시간 1주로 단축, 성공률 90% 이상" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">자신의 역할 및 수행 내용</label>
                  <textarea value={project.roleAndTasks} onChange={(e) => updateProject(index, 'roleAndTasks', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예시:&#10;• 개발자: 5명 팀에서 데이터 분석 담당, Python 스크립트로 자동화, SQL 쿼리 최적화 10개&#10;• 마케터: 3명 팀에서 광고 기획 담당, Google Ads 타겟 세그먼트 5개 설정, A/B 테스트 10회&#10;• HR: 2명 팀에서 채용 설계 담당, ATS 시스템 도입, 면접 평가 기준 표준화" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">성과 (전체 성과와 나의 기여 구분)</label>
                  <textarea value={project.achievement} onChange={(e) => updateProject(index, 'achievement', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예시:&#10;[전체 성과]&#10;• 처리 시간 10시간→5시간, 정확도 98%&#10;• 신규 고객 1.2만명, 매출 2.5억원 증가&#10;&#10;[나의 기여]&#10;• 자동화 스크립트 개발로 처리 시간 50% 단축&#10;• 타겟팅 전략으로 전환율 20% 향상" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">인사이트 및 강조하고 싶은 부분</label>
                  <textarea value={project.insights} onChange={(e) => updateProject(index, 'insights', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예시:&#10;• 개발자: 데이터 자동화로 의사결정 속도를 높이는 중요성 배움&#10;• 마케터: 데이터 기반 타겟팅으로 캠페인 효율성을 높이는 법 배움&#10;• HR: 시스템화로 HR 효율성을 높이는 중요성 배움" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addProject} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 프로젝트 추가</button>
        </div>

        {/* 다운로드 버튼 */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">경력기술서 다운로드</h3>
            <p className="text-sm text-gray-600 mb-6">작성하신 내용을 워드 문서로 다운로드하여 활용하실 수 있습니다.</p>
            <button onClick={generateWordDocument} className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="w-5 h-5" />
              워드 문서로 다운로드
            </button>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs font-bold text-gray-700 mb-2">© 2025 CareerEngineer. All Rights Reserved.</p>
              <p className="text-xs text-gray-500 mb-1">이 문서는 저작권법에 의해 보호받는 저작물입니다.</p>
              <p className="text-xs text-red-500 mb-1">문서의 전체 또는 일부를 저작권자의 사전 서면 동의 없이 무단으로 복제, 배포, 전송, 전시, 방송하거나</p>
              <p className="text-xs text-red-500 mb-1">수정 및 편집하는 행위는 금지되어 있으며, 위반 시 관련 법령에 따라 법적인 책임을 질 수 있습니다.</p>
              <p className="text-xs text-gray-500">오직 개인적인 용도로만 사용해야 하며, 상업적 목적의 사용 및 무단 배포를 엄격히 금지합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CareerStatementGenerator;