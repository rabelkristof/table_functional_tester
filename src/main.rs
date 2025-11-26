mod generated_assets;
mod resultutil;
mod test_config;
mod test_runner;
mod config_generator;

use headless_chrome::{ FetcherOptions, LaunchOptionsBuilder};
use std::env;

use crate::{config_generator::run_generator, test_runner::run_tests};
fn main() -> Result<(), failure::Error> {
    let options = LaunchOptionsBuilder::default()
        .fetcher_options(
            FetcherOptions::default()
                .with_allow_download(true)
                .with_allow_standard_dirs(true)
                .with_install_dir(Some("..\\headless_chrome")),
        )
        .headless(true)
        .build()
        .unwrap();

    let mut args = env::args();
    args.next();
    if let Some(param) = args.next() {
        if param == "generator"{
            run_generator();
        }else{
            run_tests(options, param, args);
        }
    }
    Ok(())
}
