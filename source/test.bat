cd source
call jscoverage lib lib-cov
mv lib lib-orig
mv lib-cov lib
call mocha -R mocha-lcov-reporter > ../do_not_checkin/target/surefire/coverage.dat
call mocha -R xunit > ../do_not_checkin/target/surefire/TEST-AllTest.xml
rd /S /Q lib
mkdir lib
move lib-orig lib