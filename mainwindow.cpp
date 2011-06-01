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

    /*
    ui->webView->page()->mainFrame()->setScrollBarPolicy(Qt::Vertical, Qt::ScrollBarAlwaysOff);
    ui->webView->page()->mainFrame()->setScrollBarPolicy(Qt::Horizontal, Qt::ScrollBarAlwaysOff);
    */
    this->setGeometry(QRect(10,10, 360, 640));

    inspector = new QWebInspector;
    inspector->setPage(ui->webView->page());
    inspector->setGeometry(QRect(450, 10, 700, 640));
    inspector->setVisible(true);
}

MainWindow::~MainWindow()
{
    delete ui;
}
