import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Dashboard = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const submitAnswers = () => {
    setShowResults(true);
  };

  const checkAnswer = (questionId, correctAnswer) => {
    const userAnswer = answers[questionId];
    if (questionId === 6 || questionId === 7) {
      return userAnswer === correctAnswer || userAnswer === correctAnswer.replace('%', '');
    }
    return userAnswer == correctAnswer;
  };

  return (
    <div className="rtl-content p-4" dir="rtl" style={{textAlign: 'right'}}>
      <h1 className="text-3xl font-bold mb-6 text-center" style={{background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', padding: '10px'}}>
        🎉 יחידת לימוד אינטראקטיבית באחוזים - חינוך מתמטי חוויתי עם נופר 🎉
      </h1>
      <Tabs defaultValue="explanation" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="course">קבלו שיעור במתנה</TabsTrigger>
          <TabsTrigger value="test">מבחן הבנה</TabsTrigger>
          <TabsTrigger value="example">דוגמא</TabsTrigger>
          <TabsTrigger value="explanation">הסבר</TabsTrigger>
        </TabsList>
        <TabsContent value="explanation">
          <Card>
            <CardHeader>
              <CardTitle>הסבר על איך פותרים אחוזים</CardTitle>
            </CardHeader>
            <CardContent>
              <p>כאשר רוצים לחשב אחוזים, חשוב להבין מהו אחוז. אחוז הוא חלק ממאה, כלומר 1% הוא 1 מתוך 100. כדי לחשב אחוז מתוך מספר מסוים, יש לעקוב אחר השלבים הבאים:</p>
              <ul className="list-disc list-inside mt-2">
                <li>הכפלת המספר באחוז הרצוי.</li>
                <li>חילוק התוצאה ב-100.</li>
              </ul>
              <p className="mt-2">למשל, כדי לחשב כמה הם 25% מ-80, יש להכפיל את 80 ב-25 ואז לחלק ב-100:</p>
              <p>80 × 25 = 2000</p>
              <p>2000 ÷ 100 = 20</p>
              <p>כך, 25% מ-80 הם 20.</p>
              <div className="mt-4">
                <h3 className="font-bold">המרת שבר לאחוז ולהפך</h3>
                <p>לצפייה בסרטון הסבר על המרת שבר לאחוז ולהפך, לחצו על הכפתור הבא:</p>
                <Button 
                  className="mt-2" 
                  onClick={() => {
                    const url = 'https://youtu.be/U8ZUILgMUho';
                    window.open(url, '_blank');
                  }}
                >
                  צפו בסרטון ההסבר
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="example">
          <Card>
            <CardHeader>
              <CardTitle>שאלה מילולית לדוגמא</CardTitle>
            </CardHeader>
            <CardContent>
              <p>שאלה: רותם קנתה זוג נעליים בהנחה של 20% מהמחיר המקורי. אם המחיר המקורי היה 250 שקלים, כמה רותם שילמה אחרי ההנחה?</p>
              <p className="font-bold mt-2">פתרון:</p>
              <ol className="list-decimal list-inside mt-2">
                <li>חישוב ההנחה:
                  <ul className="list-disc list-inside mr-4">
                    <li>250 × 20 = 5000</li>
                    <li>5000 ÷ 100 = 50</li>
                    <li>כלומר, ההנחה היא 50 שקלים.</li>
                  </ul>
                </li>
                <li>חישוב המחיר לאחר ההנחה:
                  <ul className="list-disc list-inside mr-4">
                    <li>250 - 50 = 200</li>
                  </ul>
                </li>
              </ol>
              <p className="font-bold mt-2">תשובה: רותם שילמה 200 שקלים אחרי ההנחה.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="test">
          <Card>
            <CardHeader>
              <CardTitle>מבחן הבנה</CardTitle>
              <CardDescription>ענו על השאלות הבאות:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="q1">1. חשבו כמה הם 75% מ-320.</Label>
                  <Input id="q1" type="number" value={answers[1] || ''} onChange={(e) => handleAnswerChange(1, e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="q2">2. מכונית נסעה 60% מהמרחק הכולל של מסלול באורך 500 קילומטרים. כמה קילומטרים נסעה המכונית?</Label>
                  <Input id="q2" type="number" value={answers[2] || ''} onChange={(e) => handleAnswerChange(2, e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="q3">3. חנות מכרה 80% מהמלאי שלה. אם נשארו 50 פריטים, כמה פריטים היו במלאי המקורי?</Label>
                  <Input id="q3" type="number" value={answers[3] || ''} onChange={(e) => handleAnswerChange(3, e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="q4">4. מחיר מוצר עלה ב-25%. אם המחיר החדש הוא 150 שקלים, מה היה המחיר המקורי?</Label>
                  <Input id="q4" type="number" value={answers[4] || ''} onChange={(e) => handleAnswerChange(4, e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="q5">5. בכיתה יש 30 תלמידים, מתוכם 40% בנים. כמה בנות יש בכיתה?</Label>
                  <Input id="q5" type="number" value={answers[5] || ''} onChange={(e) => handleAnswerChange(5, e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="q6">6. המר את השבר 3/20 לאחוז.</Label>
                  <Input id="q6" type="text" value={answers[6] || ''} onChange={(e) => handleAnswerChange(6, e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="q7">7. המר את השבר 150/500 לאחוז.</Label>
                  <Input id="q7" type="text" value={answers[7] || ''} onChange={(e) => handleAnswerChange(7, e.target.value)} />
                </div>
                <Button onClick={submitAnswers}>הגש</Button>
              </div>
              {showResults && (
                <div className="mt-4 space-y-4">
                  <h3 className="font-bold">תוצאות:</h3>
                  <div>
                    <p>שאלה 1: {checkAnswer(1, 240) ? "נכון" : "לא נכון. התשובה הנכונה היא 240."}</p>
                    {!checkAnswer(1, 240) && <p>פתרון: 320 × 75 = 24000, 24000 ÷ 100 = 240</p>}
                  </div>
                  <div>
                    <p>שאלה 2: {checkAnswer(2, 300) ? "נכון" : "לא נכון. התשובה הנכונה היא 300."}</p>
                    {!checkAnswer(2, 300) && <p>פתרון: 500 × 60 = 30000, 30000 ÷ 100 = 300</p>}
                  </div>
                  <div>
                    <p>שאלה 3: {checkAnswer(3, 250) ? "נכון" : "לא נכון. התשובה הנכונה היא 250."}</p>
                    {!checkAnswer(3, 250) && <p>פתרון: 50 מהווים 20% מהמלאי המקורי. 50 ÷ 20 × 100 = 250</p>}
                  </div>
                  <div>
                    <p>שאלה 4: {checkAnswer(4, 120) ? "נכון" : "לא נכון. התשובה הנכונה היא 120."}</p>
                    {!checkAnswer(4, 120) && <p>פתרון: 150 ÷ 125 × 100 = 120</p>}
                  </div>
                  <div>
                    <p>שאלה 5: {checkAnswer(5, 18) ? "נכון" : "לא נכון. התשובה הנכונה היא 18."}</p>
                    {!checkAnswer(5, 18) && <p>פתרון: 40% מ-30 הם בנים: 30 × 40 ÷ 100 = 12 בנים. לכן יש 30 - 12 = 18 בנות</p>}
                  </div>
                  <div>
                    <p>שאלה 6: {checkAnswer(6, "15%") ? "נכון" : "לא נכון. התשובה הנכונה היא 15%."}</p>
                    {!checkAnswer(6, "15%") && <p>פתרון: (3 × 5) / (20 × 5) = 15/100 = 15%</p>}
                  </div>
                  <div>
                    <p>שאלה 7: {checkAnswer(7, "30%") ? "נכון" : "לא נכון. התשובה הנכונה היא 30%."}</p>
                    {!checkAnswer(7, "30%") && <p>פתרון: (150 ÷ 5) / (500 ÷ 5) = 30/100 = 30%</p>}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="course">
          <Card>
            <CardHeader>
              <CardTitle>קורס קיץ דיגיטלי ייעודי לצמצום פערים וחיזוק בחשבון</CardTitle>
            </CardHeader>
            <CardContent>
              <p>לחצו עכשיו וקבלו שיעור ראשון במתנה🎁</p>
              <Button 
                className="mt-4" 
                onClick={() => {
                  const url = 'https://www.sciencedu.online/fun-fractions';
                  window.location.href = url;
                }}
              >
                לקבלת השיעור הראשון במתנה
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Dashboard />, document.getElementById('root'));
