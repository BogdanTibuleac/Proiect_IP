-- CreateTable
CREATE TABLE "_StudentExams" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StudentExams_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_StudentExams_B_index" ON "_StudentExams"("B");

-- AddForeignKey
ALTER TABLE "_StudentExams" ADD CONSTRAINT "_StudentExams_A_fkey" FOREIGN KEY ("A") REFERENCES "Exam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentExams" ADD CONSTRAINT "_StudentExams_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
