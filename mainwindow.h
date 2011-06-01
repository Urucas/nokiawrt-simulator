#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QWebInspector>
#include <QWebFrame>

namespace Ui {
    class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

public:
    QWebInspector *inspector;

private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
