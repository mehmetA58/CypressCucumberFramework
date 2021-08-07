Feature: Baskentler
Scenario Outline: baskentleri arama
Given url git
Given kullanici arama yapacak "<abc>"
Given arama yapildigini kontrol edecek "<abc>"

Examples:
    | abc |
    | london |
    | paris |
    | madrid |
    | vienna |