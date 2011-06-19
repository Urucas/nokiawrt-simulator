#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);    
    ui->webView->load(QUrl("./index.html"));

    ui->webView->page()->settings()->setAttribute(QWebSettings::LocalContentCanAccessRemoteUrls, true);
    ui->webView->page()->settings()->setAttribute(QWebSettings::DeveloperExtrasEnabled, true);
    ui->webView->page()->settings()->setAttribute(QWebSettings::JavascriptEnabled, true);

//  android size
    ui->webView->setGeometry(QRect(0,0, 480, 800));
    this->setGeometry(QRect(10,10, 480, 800));

//  nokia size
//    ui->webView->setGeometry(QRect(0,0, 360, 640));
//    this->setGeometry(QRect(10,10, 360, 640));

    /*
    ui->webView->page()->mainFrame()->setScrollBarPolicy(Qt::Vertical, Qt::ScrollBarAlwaysOff);
    ui->webView->page()->mainFrame()->setScrollBarPolicy(Qt::Horizontal, Qt::ScrollBarAlwaysOff);
    */

    inspector = new QWebInspector;
    inspector->setPage(ui->webView->page());
    inspector->setGeometry(QRect(450, 10, 700, 640));
    inspector->setVisible(true);
}

MainWindow::~MainWindow()
{
    delete ui;
}
